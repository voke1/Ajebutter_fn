import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from './model/data';
import Card from './components/Card';

const ServicePage = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />
        );
    };

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'left', fontSize: 20}}>All Services</Text>
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default ServicePage;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
