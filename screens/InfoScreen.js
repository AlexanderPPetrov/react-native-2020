import React, {useState} from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import Layout from '../layout/Layout';
import Button from '../components/Button';

export default function InfoScreen() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const cards = useSelector(state=>state.cards);
    const dispatch = useDispatch();

    function submit() {
        dispatch({
            type: 'SET_CARDS',
            payload: [...cards, {
                title,
                description
            }]
        });
    }

    return (
        <Layout>
            <Text>Enter card title:</Text>
            <TextInput 
                value={title} 
                onChangeText={text=>setTitle(text)} 
                style={styles.input} 
            />
            <Text>Enter card description:</Text>
            <TextInput 
                value={description} 
                numberOfLines={5}
                multiline={true}
                onChangeText={text=>setDescription(text)} 
                style={[styles.input, styles.textArea]} 
            />
            <Button onPress={submit} title="Add card" />
        </Layout>
    )
}

const styles = StyleSheet.create({
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
    }
});
