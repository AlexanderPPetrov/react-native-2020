import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {useSelector} from "react-redux";

import Layout from '../layout/Layout';
import Card from '../components/Card';
// class HomeScreen extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             cardItems: [
//                 {
//                     title: "Test 1",
//                     description: "Description for test 1"
//                 },
//                 {
//                     title: "Test 2",
//                     description: "Description for test 2"
//                 }
//             ]
//         }
//     }

    // getCardComponents = () => {
    //     const cardComponents = this.state.cardItems.map((card, index) => {
    //         return <Card 
    //             key={index}
    //             title={card.title} 
    //             description={card.description}></Card>
    //     })
    //     return cardComponents
    // }

//     render = () =>
        // <Layout>
        //     <View>
        //         {this.getCardComponents()}
        //         <Card 
        //             title="Hello Card" 
        //             description="Test description">
        //         </Card>
        //     </View>
        // </Layout>
// }


// export default HomeScreen

const HomeScreen = () => {
    const cards = useSelector(state => state.cards);
    console.log(cards);
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
                <Card 
                    title="Hello Card" 
                    description="Test description">
                </Card>
            </View>
        </Layout>
    )
}

export default HomeScreen;