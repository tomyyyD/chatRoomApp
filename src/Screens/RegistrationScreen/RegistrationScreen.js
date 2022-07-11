import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegistrationScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onLoginPress = () => {

    }

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Registration Screen</Text>
        </View>
    )
}

export default RegistrationScreen;
