import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePage from "./ProfilePage";

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfilePage />
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
});
