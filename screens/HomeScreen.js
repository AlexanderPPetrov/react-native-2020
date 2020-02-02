import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {setCountries, deleteCountry} from '../redux/actions/countries';
import {setLoading} from '../redux/actions/loading';
import API from '../remote';

import Layout from '../layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import ButtonOutlined from '../components/ButtonOutlined';
import Modal from '../components/Modal';

const HomeScreen = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedCountryForDelete, setCountryForDelete] = useState(null);
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
    
    function handleDelete(item) {
        setModalIsVisible(true);
        setCountryForDelete(item);
    }
    function deleteCard() {
        if(selectedCountryForDelete){
            dispatch(deleteCountry(selectedCountryForDelete));
            setModalIsVisible(false);
        }
    }
    
    const renderCard = ({item: card}) => {
        return <Card 
                    title={card.title} 
                    alpha2Code={card.alpha2Code}
                    description={card.description}
                    onDeletePressed={()=>handleDelete(card)}
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
                visible={modalIsVisible}
            >
                <Text style={styles.modalTitle}>Are you sure?</Text>
                <View style={styles.row}>
                    <Button onPress={deleteCard} title="Yes" />
                    <ButtonOutlined onPress={() => setModalIsVisible(false)} title="No" />
                </View>
            </Modal>
        </Layout>
            
    )
}

const styles = StyleSheet.create({
    modalTitle: {
        fontSize: 18,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row'
    }
});
export default HomeScreen;