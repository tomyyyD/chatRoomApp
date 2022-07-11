import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen, HomeScreen, RegistrationScreen, ChatScreen} from "./src/Screens";

const Stack = createNativeStackNavigator()

const App = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={({route}) => ({title: route.params.name})}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
