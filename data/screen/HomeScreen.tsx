import {Text, View} from "react-native";
import React from "react";
import {Button} from "native-base";

export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button colorScheme={"success"} onPress={() => navigation.navigate('Tasks')}>View all tasks!</Button>
            <Text>{'\n'}</Text>
            <Button colorScheme={"success"} onPress={() => navigation.navigate('Experimental')}>Experimental!</Button>
        </View>
    )
}
