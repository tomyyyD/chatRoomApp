import React, { useState } from 'react'
import {Image, Platform, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from "../styles";

const RegistrationScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {

    }
    const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
    const HEADER_HEIGHT = Platform.OS === 'ios'  ? 44 : 56;

    return (
        <View style={styles.container}>
            <View style={{height: HEADER_HEIGHT, width: '100%', backgroundColor: '#232329'}}>
                <StatusBar barStyle='light-content' translucent/>
            </View>
            <Image
                source={require('../../../assets/userIcon.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Register!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    placeholder="full name"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize='none'
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize="none"
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="password"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize='none'
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    placeholder="confirm password"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize='none'
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.largeButton}
                    onPress={() => onFooterLinkPress()}>
                    <Text style={styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.largeButtonAlt}
                    onPress={() => onFooterLinkPress()}>
                    <Text style={styles.buttonAltText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegistrationScreen;
