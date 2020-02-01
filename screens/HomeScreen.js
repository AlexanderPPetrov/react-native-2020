import React from 'react';
import {
    View,
} from 'react-native';
import {useSelector} from "react-redux";

import Layout from '../layout/Layout';
import Card from '../components/Card';

const HomeScreen = () => {
    const cards = useSelector(state => state.cards);
    const getCardComponents = () => {
        const cardComponents = cards.map((card, index) => {
            return <Card 
                key={index}
                title={card.title} 
                description={card.description}></Card>
        })
        return cardComponents
    }
    return (
        <Layout>
            <View>
                {getCardComponents()}
            </View>
        </Layout>
    )
}

export default HomeScreen;