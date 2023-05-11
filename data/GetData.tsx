import {Text, View} from "react-native";
import {useState} from "react";
import {BASE_URL} from '../Store'
import {Button} from "native-base";

export default function GetData() {
    const [data, setData] = useState('ana are mere')

    const fetchName = async () => {
        try {
            const response = await fetch(`${BASE_URL}api/test`);
            const data = await response.json();
            console.log(data)
            setData(data);
        } catch (e) {

            console.log(e)
        }
    }

    return (<View>
        <Text>
            De ce nu merge?: + {data}
        </Text>
        {/*<Button title={'SetName'} onPress={fetchName}/>*/}
        <Text>
            {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
        </Text>
        <Button colorScheme="success" onPress={fetchName}>Success</Button>
    </View>)
}
