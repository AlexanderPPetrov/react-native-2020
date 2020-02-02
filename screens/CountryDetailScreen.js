import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator, Text} from 'react-native';
import API from '../remote';
import Layout from '../layout/Layout';


const ContryDetails = (props) => {
    const alpha2Code = props.navigation.getParam('alpha2Code');


    return (
        <Layout>
            <ScrollView>
                <Text>It works!</Text>
                <Text>{alpha2Code}</Text>
            </ScrollView>
        </Layout>
    );
};
export default ContryDetails;
