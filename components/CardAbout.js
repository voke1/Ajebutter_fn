import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { icons } from "../constants";

const Card = ({ itemData }) => {
  const styleContent = (id) => {
    if (id == 1) {
      return (
        <Text numberOfLines={5} style={styles.cardDetails}>
          {itemData.description}
        </Text>
      );
    }
    if (id == 2) {
      return (
        <View style={{ width: "100%", marginTop: "6%" }}>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Image
              source={icons.phone}
              resizeMode="contain"
              style={{
                tintColor: "black",
                width: 25,
                height: 20,
              }}
            />
            <Text> +234 (0) 816 463 7381</Text>
          </View>
          <View
            style={{ flexDirection: "row", width: "100%", marginTop: "5%" }}
          >
            <Image
              source={icons.location}
              resizeMode="contain"
              style={{
                tintColor: "black",
                width: 25,
                height: 25,
              }}
            />
            <Text> www.bellanigeria.com</Text>
          </View>
        </View>
      );
    }
    return (
      <Text numberOfLines={5} style={styles.cardDetails}>
        {itemData.description}
      </Text>
    );
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
          {styleContent(itemData.id)}
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 140,
    marginVertical: 6,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 5, height: 50 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  cardInfo: {
    flex: 0,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 0,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: "#fff",
    width: "100%",
  },
  cardTitle: {
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
    lineHeight: 22,
    fontSize: 14,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    fontFamily: "Roboto-Regular",
  },
});
