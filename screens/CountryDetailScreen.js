import React, {useState, useEffect} from 'react';
import {
    ScrollView, 
    ActivityIndicator, 
    Alert, 
    Text, 
    View, 
    Image, 
    StyleSheet
} from 'react-native';
import API from '../remote';
import Layout from '../layout/Layout';
import ErrorLabel from '../components/ErrorLabel';


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
            .get(`alpha/${alpha2Code}`)
            .then(response=>{
                setData(response.data);
                setError({
                    hasError: false,
                });
            })
            .catch(error=>{
                // Alert.alert('Error', 'Error occurred!');
                setError({
                    hasError: true,
                    message: error.toString()
                });
            })
            .finally(()=>{
                setTimeout(()=>{
                    setIsLoading(false);
                }, 2000)
            });
    }, [alpha2Code]);


    return (
        <Layout>
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading &&
                <ScrollView>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.heading}>{data.name}</Text>
                            <Text>{data.capital}</Text>
                        </View>
                        <Image 
                            source={{uri: `https://www.countryflags.io/${data.alpha2Code}/flat/64.png` }} 
                            style={styles.flag}
                            />
                    </View>
                </ScrollView>
            }
            {error.hasError && 
                <ErrorLabel title="Error:" description={error.message} />
            }
        </Layout>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 32,
    },
    flag: {
        width: 64,
        height: 64
    }
});

export default ContryDetails;
