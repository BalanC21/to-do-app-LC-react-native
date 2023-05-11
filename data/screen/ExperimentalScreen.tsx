import {StyleSheet, Text, View} from "react-native";
import GetData from "../GetData";
import TestNativeBase from "../../exper/TestNativeBase";
import {StatusBar} from "expo-status-bar";
import {Button} from "native-base";
import React from "react";

export default function ExperimentalScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                experimental
            </Text>
            <Text>Open up App.js to start working on your app!</Text>
            <GetData/>
            <TestNativeBase/>
            <StatusBar style="auto"/>
            <Button colorScheme={"success"} onPress={() => navigation.goBack()}>Go back to Home!</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
