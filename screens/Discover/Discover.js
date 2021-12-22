import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons, images } from "../../constants";
import { ViewTabs } from "..";

const { height, width } = Dimensions.get("window");

const Discover = (props) => {
  // componentWillMount() {
  //   this.startHeaderHeight = 228;
  //   if (Platform.OS == "android") {
  //     this.startHeaderHeight = 100 + StatusBar.currentHeight;
  //   }
  // }


  // render() {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            height: 230,
            backgroundColor: "#979797",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <ImageBackground
            source={images.beauty1}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            {/* notification icon  */}
            {/* <TouchableOpacity onPress={() => console.log("Pressed")}>
                <Image
                  source={icons.notification}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: "88%",
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity> */}

            <Text
              style={{
                fontSize: 25,
                marginTop: "40%",
                marginLeft: 20,
                color: "white",
              }}
            >
              Welcome Voke
            </Text>
          </ImageBackground>
        </View>

        <View
          style={{
            borderBottomColor: "#dddddd",
            backgroundColor: "green",
            borderBottomWidth: 2,
            height: "75%",
          }}
        >
          <ViewTabs navigation={props.navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
  // }
};
export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
