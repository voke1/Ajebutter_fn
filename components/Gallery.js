import * as React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { data } from "../constants";
import { Card } from "../components";

const Gallery = (props) => {
    // props.navigation.setOptions({ tabBarVisible: true });

  const renderItem = ({ item }) => {
    return (
      <Card
        itemData={item}
        // onPress={() => navigation.navigate('CardItemDetails', {itemData: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{textAlign: 'left', fontSize: 20}}>All Services</Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
