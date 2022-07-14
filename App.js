import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen, HomeScreen, RegistrationScreen, ChatScreen} from "./src/Screens";
import {useFonts, NotoSans_700Bold} from "@expo-google-fonts/noto-sans"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

const App = () => {
    // const [user, setUser] = useState(null);

    let [fontsLoaded] = useFonts({
        NotoSans_700Bold
    })

    if (!fontsLoaded){
        return null;
    }else{
        SplashScreen.hideAsync();
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
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name="Chat" 
                        component={ChatScreen} 
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;
