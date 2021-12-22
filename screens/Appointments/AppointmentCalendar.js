import * as React from "react";
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import { SafeAreaView } from "react-navigation";
import { Saloon } from "../../components";
import { icons, images } from "../../constants";

const AppointmentCalendar = () => {
  return (
    <View
      style={{
        width: "95%",
        alignSelf: "center",
        marginTop: 10,
        height: "100%",
      }}
    >
      {/* <Text style={{textAlign: 'left', fontSize: 20}}>All Services</Text> */}
      <View style={{ height: "45%" }}>
        <Calendar />
      </View>

      <View style={styles.cardInfo1}>
        <View
          style={{
            marginTop: 3,
            marginBottom: "1%",
            flex: 1,
            flexDirection: "row",
          }}
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

      <View style={styles.totalPay}>
        <Text style={styles.cardTitle}>Remind me 1hr in Advance</Text>
        <Text style={styles.totalAmount}>$25</Text>

        {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
      </View>
    </View>
  );
};

export default AppointmentCalendar;

const styles = StyleSheet.create({
  cardInfo1: {
    flex: 1,
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
    height: 500,
    // backgroundColor: 'red',
    // alignContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    elevation: 1,
  },
  totalPay: {
    // flex: 1,
    padding: 10,
    borderColor: "#ccc",
    // // borderWidth: 1,
    // // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    height: 50,
    marginTop: 2,
    // elevation: 1,
    // flexDirection: 'row',
    // backgroundColor: 'blue',
    marginBottom: 15,
  },
  totalAmount: {
    fontWeight: "bold",
    // marginLeft: 10,
    color: "#FF7E00",
    marginLeft: "80%",
  },
});
