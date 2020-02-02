import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator, Alert, Text} from 'react-native';
import API from '../remote';
import Layout from '../layout/Layout';


const ContryDetails = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState({
        hasError: false,
        message: null
    });

    const alpha2Code = props.navigation.getParam('alpha2Code');

    useEffect(()=>{
        API
            .get(`alpha1/${alpha2Code}`)
            .then(response=>{
                setData(response.data);
            })
            .catch(error=>{
                // Alert.alert('Error', 'Error occurred!');
                setError({
                    hasError: true,
                    message: 'Error occurred!'
                });
            })
            .finally(()=>{
                setTimeout(()=>{
                    setIsLoading(false);
                }, 2000)
            });
    }, []);


    return (
        <Layout>
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading &&
                <ScrollView>
                    <Text>{data.name}</Text>
                    <Text>{data.capital}</Text>
                </ScrollView>
            }
        </Layout>
    );
};
export default ContryDetails;
