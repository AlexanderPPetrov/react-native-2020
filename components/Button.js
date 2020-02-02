import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors';

function Button(props) {

    return (
        <TouchableOpacity 
            onPress={props.onPress}
            activeOpacity={.7}
            style={[styles.button, props.style]}
        >
            <LinearGradient start={[0, 0]} end={[1, 0]} style={styles.gradient} colors={[Colors.secondary, Colors.primary]}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        marginHorizontal: 5,
        flex: 1
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    gradient: {
        borderRadius: 23,
        height: 45,
        justifyContent: 'center'
    }

});
export default Button;