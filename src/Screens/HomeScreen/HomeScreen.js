import React, {useEffect, useState} from 'react'
import {FlatList, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native'
import {firebase} from "../../firebase/config";
import styles from '../styles'

const HomeScreen = ({route, navigation}) => {
    const [entityText, setEntityText] = useState('');
    const [entities, setEntities] = useState([]);
    // const [idHidden, setIdHidden] = useState(false);

    const entityRef = firebase.firestore().collection('entities')
    const userID = route.params.user.id;
    const userName = route.params.user.fullName;

    //gets all the messages in the channel
    useEffect(() => {
        let mounted = true;
        if (mounted){
            entityRef
                .orderBy('createdAt', 'desc')
                .onSnapshot(
                    querySnapshot => {
                        const newEntities = [];
                        querySnapshot.forEach(doc => {
                            const entity = doc.data();
                            entity.id = doc.id;
                            newEntities.push(entity)
                        });
                        setEntities(newEntities);
                    },
                    error => {
                        console.log(error)
                    }
                )
        }

        return function cleanup() {
            setEntities([]);
            mounted = false;
        }
    }, []);

    //add message to channel
    const onSend = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                authorName: userName,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const signOut = () => {
        navigation.navigate("Login");
    }

    const renderEntity = ({item}) => {
        if (userID === item.authorID){
            return (
                <View style={{alignItems:"flex-end"}}>
                    <Text style={styles.messageHeader}>
                        {item.authorName}
                    </Text>
                    <View style={styles.sentMessageContainer}>
                        <Text style={styles.messageText}>
                            {item.text}
                        </Text>
                    </View>
                </View>
            )
        }else{
            return (
                <View style={{alignItems:"flex-start"}}>
                    <Text style={styles.messageHeaderAlt}>
                        {item.authorName}
                    </Text>
                    <View style={styles.receivedMessageContainer}>
                        <Text style={styles.messageText}>
                            {item.text}
                        </Text>
                    </View>
                </View>
            )
        }
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            <View style={styles.container}>
                <View style={styles.signOutContainer}>
                    <TouchableOpacity onPress={signOut}>
                        <Text style={styles.buttonAltText}>
                            Sign Out
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    { entities && (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={entities}
                                renderItem={renderEntity}
                                keyExtractor={(item) => item.id}
                                removeClippedSubviews={true}
                                inverted={true}
                            />
                        </View>
                    )}
                </View>
                <View style={styles.messagingContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="send message"
                            placeholderTextColor="#aaaaaa"
                            onChangeText={(text) => setEntityText(text)}
                            value={entityText}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={styles.messagingButton} onPress={onSend}>
                        <Text style={styles.buttonAltText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen;
