import React from "react";
import {Text, View} from "react-native";
import {Button} from "native-base";

export default function TasksScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button colorScheme={"success"} onPress={() => navigation.goBack()}>Go back to Home!</Button>
        </View>
    )
}
