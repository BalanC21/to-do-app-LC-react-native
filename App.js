import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import GetData from "./data/GetData";
import TestNativeBase from "./exper/TestNativeBase";
import {NativeBaseProvider} from "native-base";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./data/screen/HomeScreen";
import TasksScreen from "./data/screen/TasksScreen";
import ExperimentalScreen from "./data/screen/ExperimentalScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Tasks" component={TasksScreen}/>
                    <Stack.Screen name="Experimental" component={ExperimentalScreen}/>

                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>

    );
}


