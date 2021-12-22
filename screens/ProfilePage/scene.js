import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import files from "./filesBase64";
import { icons } from "../../constants";

const ProfileScreen = () => {
  const myCustomShare = async () => {
    try {
  
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View
          style={{
            flexDirection: "column",
            marginTop: 30,
            alignSelf: "center",
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={100}
            style={{ backgroundColor: "#8F9BB3" }}
          />
          <View>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
          </View>
        </View>
        <Text style={{ alignSelf: "center", color: "grey" }}>
          voke.olomu@yahoo.com
        </Text>
      </View>

      <View style={{ ...styles.cardInfo, height: "20%" }}>
        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.payment}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>Payment Method</Text>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.account}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>
            Account Information
          </Text>
        </View>
      </View>

      <View style={{ ...styles.cardInfo, height: "30%" }}>
        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>
          <Text style={{ marginTop: 5, marginLeft: 10 }}>Notification</Text>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.friends}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>Invite Friends</Text>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.settings}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>Settings</Text>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "#FF7E00",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.terms}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>
            Terms of services
          </Text>
        </View>
      </View>
      <View style={{ ...styles.cardInfo, height: "10%" }}>
        <View
          style={{ flex: 1, flexDirection: "row", marginLeft: 3, marginTop: 5 }}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "grey",
              width: 30,
              height: 30,
            }}
          >
            <Image
              source={icons.logout}
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 20,
                marginTop: 5,
              }}
            />
          </View>

          <Text style={{ marginTop: 5, marginLeft: 10 }}>Log Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    width: 450,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  cardInfo: {
    padding: 10,
    // flex: 1,
    margin: 5,
    borderColor: "#ccc",
    borderWidth: 0,
    backgroundColor: "#fff",
    // // borderLeftWidth: 0,
    borderRadius: 3,
    alignSelf: "center",
    width: 380,
    shadowColor: "#999",
    shadowOffset: { width: 5, height: 50 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    // height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
