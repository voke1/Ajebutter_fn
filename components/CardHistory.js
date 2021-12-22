import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Saloon } from "../components";
import { icons, images } from "../constants";

// import {icons} from '../../../dashboard1/constants';

// import StarRating from './StarRating';

const Card = ({ itemData, onPress }) => {
  return (
    <View>
      <View style={styles.cardInfo}>
        <View
          style={{ marginTop: 3, flex: 1, flexDirection: "row", height: 95 }}
        >
          <View>
            <Saloon imageUri={images.home} />
          </View>
          <View styles={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.cardTitle}>Tina Beauty saloon change</Text>
            <Text style={styles.cardTitle}>7b admiralty way Lekki phase 1</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ marginTop: 3 }}>Hair Styling</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 3,
              marginTop: 5,
            }}
          >
            <Image
              source={icons.iconProfile}
              resizeMode="contain"
              style={{
                tintColor: "grey",
                width: 20,
                height: 15,
                marginTop: 9,
              }}
            />
            <Text style={{ marginTop: 5, marginLeft: 5 }}>Luis Delgacio</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.cardTitle}>1:30 - 2:30 PM</Text>
            <Text style={{ fontWeight: "bold", marginLeft: "10%" }}>
              June 15, 2020
            </Text>
            <Text style={{ fontWeight: "bold", marginLeft: "15%" }}>$25</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardInfo: {
    padding: 10,
    height: "30%",
    flex: 1,
    margin: 5,
    borderColor: "#ccc",
    borderWidth: 0,
    // // borderLeftWidth: 0,
    borderRadius: 3,
    backgroundColor: "#FFF",
    width: "99%",
    alignSelf: "center",

    shadowColor: "#999",
    shadowOffset: { width: 5, height: 50 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    lineHeight: 22,
    fontSize: 14,
    margin: 1,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    fontFamily: "Roboto-Regular",
  },
});
