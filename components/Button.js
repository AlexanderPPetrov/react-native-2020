import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function Button(props) {

    return (
        <TouchableOpacity 
            style={styles.button}
        >
            <Text>Add card</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.iconColor
    }
});
export default Button;