import React, { useState } from 'react'
import {Button, Image, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../styles'
import platform from "react-native-web/dist/exports/Platform";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('Registration', {name: "Register"})
    }

    const onLoginPress = () => {

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
            <Text style={styles.title}>Welcome!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize='none'
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="password"
                    placeholderTextColor="#aaaaaa"
                    autoCapitalize="none"
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonAlt}
                    onPress={() => onFooterLinkPress()}>
                    <Text style={styles.buttonAltText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onFooterLinkPress()}>
                    <Text style={styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;
