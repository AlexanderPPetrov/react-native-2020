import React, {useEffect} from 'react';
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios';
import {setCountries} from '../redux/actions/countries';
import {setLoading} from '../redux/actions/loading';

import Layout from '../layout/Layout';
import Card from '../components/Card';

const HomeScreen = () => {
    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    
    const getContries = async () => {
        dispatch(setLoading(true));
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        if(response && response.hasOwnProperty('data')){
            const newCards = response.data.splice(0, 20).map(item=>{
                return {
                    title: item.name,
                    description: item.subregion
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
        </Layout>
            
    )
}

export default HomeScreen;