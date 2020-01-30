import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import Constants from "expo-constants";
import SidebarItem from "./SidebarItem";
import {MaterialIcons, FontAwesome, Entypo} from '@expo/vector-icons';

import colors from '../constants/Colors';


class SideBar extends Component {

    renderSidebarMenu = () => {
        return <FlatList
            data={menuItems}
            renderItem={({item}) => <SidebarItem
                item={item}
                navigation={this.props.navigation}
            />}
            keyExtractor={(item, index) => item.id}
        />
    }
    render = () =>
        <View style={styles.sidebar}>
            <View style={styles.headerContainer}>
                <Image
                    style={{ width: '100%', height: 120 }}
                    source={require('../assets/images/drawer_header.png')}
                />
            </View>
            {this.renderSidebarMenu()}
        </View>
}

export default SideBar;

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor:  '#ffffff'
    },
    headerContainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#3a9384',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

const menuItems = [
    {
        name: "Начало",
        route: "Home",
        id: "1",
        color: colors.home,
        icon: <FontAwesome
            style={styles.icon}
            name="home"
            size={16}
            color={colors.textSecondary}/>,
    },
    {
        name: "Информация",
        route: "Info",
        id: "2",
        color: colors.info,
        icon: <Entypo
            style={styles.icon}
            name="info"
            size={16}
            color={colors.textSecondary}/>,
    },


];