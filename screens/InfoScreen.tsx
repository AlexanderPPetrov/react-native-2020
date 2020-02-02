import React, {useState} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Picker,
    ScrollView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {setCountries} from '../redux/actions/countries';
import Colors from '../constants/Colors';
import Layout from '../layout/Layout';
import Button from '../components/Button';

type AppendPrepend = 'append' | 'prepend'

export default function InfoScreen() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [direction, setDirection] = useState<AppendPrepend>('append');

    const countries = useSelector(state=>state.countries);
    const dispatch = useDispatch();

    function submit() {
        const newItem = {
            title,
            description,
            alpha2Code: 'bg'
        };
        const newCountries = 
            direction === 'append' 
                ? [...countries, newItem] 
                : [newItem, ...countries];

        setTitle('');
        setDescription('');
        dispatch(setCountries(newCountries));
    }

    return (
        <Layout>
            <ScrollView>
                <View style={styles.infoContainer}>
                    <Text>Enter country name:</Text>
                    <TextInput
                        value={title}
                        onChangeText={text=>setTitle(text)}
                        style={styles.input}
                    />
                    <Text>Enter country description:</Text>
                    <TextInput
                        value={description}
                        numberOfLines={5}
                        multiline={true}
                        onChangeText={text=>setDescription(text)}
                        style={[styles.input, styles.textArea]}
                    />
                    <Picker 
                        selectedValue={direction} 
                        onValueChange={value=>setDirection(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Prepend" value="prepend" />
                        <Picker.Item label="Append" value="append" />
                    </Picker>
                    <Button onPress={submit} title="Add card" />
                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        padding: 15,
        backgroundColor: "#ffffff",
    },
    input: {
        backgroundColor: '#eee',
        borderColor: Colors.borderLight,
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 15,
        marginTop: 15,
    },
    textArea: {
        height: 150,
        paddingVertical: 10,
        textAlignVertical: 'top'
    },
    picker: {
        borderColor: '#333333',
        borderWidth: 1,
        marginBottom: 15,
    }
});
