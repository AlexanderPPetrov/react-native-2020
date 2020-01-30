import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

class SidebarItem extends React.Component {

    menuItemPressed = () => {
        this.props.navigation.navigate(this.props.item.route);
    };

    render = () => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={this.menuItemPressed}
        >
            <View style={[styles.iconContainer, {backgroundColor: this.props.item.color}]}>
                {this.props.item.icon}
            </View>
            <Text style={styles.label}>{this.props.item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 3,
        alignItems: 'center',
        paddingVertical: 5
    },
    label: {
        fontSize: 16,
        color: '#2e2e2e'
    },
    activeLabel: {
        color: '#000000'
    },
    sidebarItemActive: {
        backgroundColor: '#7eba9b'
    },
    iconContainer: {
        borderRadius: 50,
        width: 30,
        height: 30,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default SidebarItem
