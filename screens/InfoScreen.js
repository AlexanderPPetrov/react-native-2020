import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../layout/Layout';
import Button from '../components/Button';

export default function InfoScreen() {

    
    return (
        <Layout>
            <Text>Enter card details:</Text>
            <TextInput style={styles.input} />
            <Button />
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
    },
});
