import {Button, Text, View} from "react-native";
import {useState} from "react";
import {BASE_URL} from '../Store'

export default function GetData() {
    const [data, setData] = useState('ana are mere')

    const fetchName = async () => {
        try {
            const response = await fetch(`${BASE_URL}api/test`);
            // const response = await fetch('http://localhost:3000/api/test');
            const data = await response.json();
            setData(data);
        } catch (e) {

            console.log(e)
        }
    }

    return (<View>
        <Text>
            De ce nu merge?: + {data}
        </Text>
        <Button title={'SetName'} onPress={fetchName}/>
    </View>)
}