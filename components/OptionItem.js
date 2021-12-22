import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const OptionItem = ({ icon, label, onPress, labelStyle}) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <View style={{ width: 40, height: 40 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.gray,
          ...FONTS.body3,
          textAlign: 'center',
          ...labelStyle
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionItem;
