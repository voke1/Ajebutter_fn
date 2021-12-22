import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Saloon = ({imageUrl})=> {


    return (
      <View
        style={{
          height: 132,
          width: 130,
          marginLeft: 10,
          borderColor: "#dddddd",
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={{ uri: imageUrl }}
            style={{
              flex: 1,
              resizeMode: 'cover',
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            textAlign: "center",
            paddingTop: 5,
            alignItems: "center",
          }}
        />
      </View>
    );
  
}

export default Saloon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
