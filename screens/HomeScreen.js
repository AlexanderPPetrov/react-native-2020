import React, {useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    Modal,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {setCountries} from '../redux/actions/countries';
import {setLoading} from '../redux/actions/loading';
import API from '../remote';

import Layout from '../layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import ButtonOutlined from '../components/ButtonOutlined';

const HomeScreen = () => {
    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    
    const getContries = async () => {
        dispatch(setLoading(true));
        const response = await API.get("all");
        if(response && response.hasOwnProperty('data')){
            const newCards = response.data.splice(0, 20).map(item=>{
                return {
                    title: item.name,
                    description: item.subregion,
                    alpha2Code: item.alpha2Code
                }
            });
            setTimeout(() =>{
                dispatch(setCountries(newCards));
                dispatch(setLoading(false));
            },1000);
        }
};

    useEffect(()=>{
        getContries();
        
    }, []);
    
    
    const renderCard = ({item: card}) => {
        return <Card 
            title={card.title} 
            alpha2Code={card.alpha2Code}
             description={card.description} 
            />
    }

    return ( 
        <Layout>
            {isLoading ? <ActivityIndicator/> :
            <FlatList 
                data={countries}
                renderItem={renderCard}
                keyExtractor={(_, index)=>`card_${index}`}
                />
            }
            <Modal
                visible={true}
                transparent={true}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Are you sure?</Text>
                        <View style={styles.row}>
                            <Button title="Yes" />
                            <ButtonOutlined title="No" />
                        </View>
                    </View>
                </View>
            </Modal>
        </Layout>
            
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginHorizontal: 30,
        padding: 20,
        elevation: 3
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row'
    }
});
export default HomeScreen;