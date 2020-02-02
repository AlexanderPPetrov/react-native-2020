import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import SideBar from '../components/SideBar';
import UserScreen from '../screens/UserScreen';
import CoutryDetailScreen from '../screens/CountryDetailScreen';


const Drawer = createDrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Info: {screen: InfoScreen},
        User: { screen: UserScreen },
        CountryDetail: { screen: CoutryDetailScreen },
    },
    {
        initialRouteName: "Home",
        contentComponent: props => <SideBar {...props} />
    }
);

const RootStack = createStackNavigator(
    {
        Drawer: {
            screen: Drawer
        },
        Home: {screen: HomeScreen},
        Info: {screen: InfoScreen},
        User: { screen: UserScreen },
        CountryDetail: { screen: CoutryDetailScreen },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;