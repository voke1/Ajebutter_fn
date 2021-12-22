import * as React from "reactn";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { icons, images } from "../../../constants";

const Confirmation = () => {
  return (
    <View>
      <View style={{  backgroundColor: "#F4F4F4" }}>
        <View style={styles.container}>
          <Text style={styles.cardTitle1}>Services</Text>
            <View style={styles.cardInfo1}>
              <View
                style={{
                  height: 130,
                  marginTop: 3,
                  marginBottom: "20%",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View styles={{ flex: 1, flexDirection: "column" }}>
                  <Text style={styles.cardTitle}>Tina Beauty saloon</Text>
                  <Text style={styles.cardTitle}>
                    7b admiralty way Lekki phase 1
                  </Text>
                </View>
                <View horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image
                    source={icons.paid}
                    resizeMode="contain"
                    style={{
                      tintColor: "grey",
                      width: 100,
                      height: 100,
                      margin: 20,
                    }}
                  />
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={styles.cardTitle}>Hair Styling</Text>
                  <Text style={{ fontWeight: "bold", marginLeft: "40%" }}>
                    June 15, 2020
                  </Text>
                </View>

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
                  <Text style={{ marginTop: 5, marginLeft: 10 }}>
                    Luis Delgacio
                  </Text>
                  <Text style={{ fontWeight: "bold", marginLeft: "32%" }}>
                    1:30 - 2:30 PM
                  </Text>
                </View>
              </View>
            </View>
          
        </View>
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "95%",
    alignSelf: "center",
    flexDirection: "column",
    marginBottom: "50%",
    // width: '90%',
    // alignSelf: 'center',
    // backgroundColor: "black",
  },
  button: {
    alignItems: "center",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
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
    flex: 1,
    padding: 10,
    borderColor: "#ccc",
    // borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginTop: 10,
    height: 60,
    elevation: 1,
    // backgroundColor: 'green',
  },
  cardInfo1: {
    // flex: 1,
    flexDirection: "column",
    padding: 10,
    borderColor: "#ccc",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    marginTop: 10,
    height: 300,
    // backgroundColor: 'red',
    // alignContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    elevation: 1,
  },
  totalPay: {
    flex: 1,
    padding: 10,
    borderColor: "#ccc",
    // borderWidth: 1,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    height: "5%",
    marginTop: 2,
    elevation: 1,
    flexDirection: "row",
    // backgroundColor: 'blue'
  },
  cardTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  totalAmount: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#FF7E00",
    marginLeft: "65%",
  },
  cardTitle1: {
    fontWeight: "bold",
    marginLeft: 2,
    marginTop: 20,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
