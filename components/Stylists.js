import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "../constants";

const Stylists = ({ name, imageUrl, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={{
        height: 132,
        width: 90,
        margin: 2,
        borderColor: "#dddddd",
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "column" }}>
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: 90,
            height: 80,
            resizeMode: "cover",
            borderRadius: 5,
          }}
        />
        {isSelected ? (
          <Image
            source={images.selectedItem}
            style={{ width: 40, height: 40, position: "absolute", right: 0 }}
          />
        ) : null}
      </View>
      <View
        style={{
          textAlign: "center",
          paddingTop: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Stylists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
