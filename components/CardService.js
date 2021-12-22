import React, { useState } from "reactn";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import checked from '../assets/checked.png'
import { icons, images } from "../constants";

// import StarRating from './StarRating';

const CardService = ({ itemData, onPress,isSelected}) => {
  // const [press, setPress] = useState("");

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={{ uri: itemData.imageUrl }}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <View style={{ width: "75%", marginTop: 5 }}>
            <Text style={styles.cardTitle}>{itemData.name}</Text>

            <View style={{ flexDirection: "row" }}>
              <Text numberOfLines={1} style={styles.cardDetails}>
                {`${itemData.duration} Minutes`}
              </Text>
              <Text
                style={{
                  marginTop: "7%",
                  fontWeight: "bold",
                  marginLeft: "20%",
                  color: "#FF7E00",
                }}
              >
                {`₦ ${itemData.amount}`}
              </Text>
            </View>
          </View>

          {isSelected ? (
            <Image
              source={icons.whiteCheck}
              style={{ marginLeft: "5%", marginTop: "10%" }}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardService;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    // shadowColor: '#999',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 3,
    flexDirection: "row",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    marginTop: "8%",
    fontWeight: "bold",
  },
});
