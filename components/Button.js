import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function Button(props) {

    return (
        <TouchableOpacity 
            onPress={props.onPress}
            activeOpacity={.7}
            style={[styles.button, props.style]}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.iconColor,
        height: 55,
        borderRadius: 30,
        marginHorizontal: 50,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});
export default Button;