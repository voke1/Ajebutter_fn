import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Slot = ({ isSelected, label, onPress, contentContainerStyle, labelStyle }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: "42%",
        // ...contentContainerStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 140,
          height: 40,
          // backgroundColor: isSelected ? "#FF7E00" : "white",
          borderRadius: 5,
          borderColor: "#ccc",
          borderWidth: 1,
          justifyContent: "center",
          ...contentContainerStyle
        }}
      >
        {/* #FF7E00 */}
        <Text
          style={{ textAlign: "center", ...labelStyle}}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Slot;
