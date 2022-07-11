import React, { useState } from 'react'
import {Button, Image, Text, TextInput, TouchableOpacity, View} from 'react-native'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('Registration', {name: "Register"})
    }

    const onLoginPress = () => {

    }

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Login Screen</Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="E-mail"
                placeholderTextColor="#aaaaaa"
                autoCapitalize='none'
            />
            <Button title={"Sign Up!"} onPress={onFooterLinkPress} />
        </View>
    )
}

export default LoginScreen;
