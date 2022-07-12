import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({route, navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Text>hello {route.params.user.fullName}</Text>
        </View>
    )
}

export default HomeScreen;
