import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-shadow-cards";

const OffersCategory = (props) => {
  return (
    <Card
      style={{
        flexDirection: "column",
        height: "95%",
        width: 250,
        marginLeft: 20,
      }}
    >
      <View style={{ flex: 3 }}>
        <Image
          source={props.imageUri}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        />
      </View>
      <View style={{ padding: 5 }}>
        <Text style={{ fontWeight: "bold", }}>{props.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              flex: 1,
              fontSize: 12,
              color: "grey",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {props.period}
          </Text>
          <Text
            style={{
              color: "#FF7E00",
              fontSize: 14,
              fontWeight: "bold",
              // margin: 5,
              textAlign: "right",
              flex: 1,
            }}
          >
            {props.price}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default OffersCategory;
