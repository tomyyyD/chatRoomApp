import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen, HomeScreen, RegistrationScreen, ChatScreen} from "./src/Screens";
import {useFonts, NotoSans_700Bold} from "@expo-google-fonts/noto-sans"
import AppLoading from "expo-app-loading";
import {StatusBar} from "react-native";


const Stack = createNativeStackNavigator()

const App = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    let [fontsLoaded] = useFonts({
        NotoSans_700Bold
    })

    if (!fontsLoaded){
        return <AppLoading />
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}

                    />
                    <Stack.Screen
                        name="Registration"
                        component={RegistrationScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
