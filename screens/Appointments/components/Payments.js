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
import { Saloon } from "../../../components";
import { icons, images } from "../../../constants";
import { FlutterwaveInit, PayWithFlutterwave } from "flutterwave-react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { setPayment } from "../../../stores/payment/paymentActions";
import { setBookButtonEnable } from "../../../stores/tab/tabActions";

const Payments = ({ loading, savePayment, setButtonEnable, isEnabled, route, navigation}) => {
  const serviceSelected = route;
  async function payWithFlutterwave(data) {
    data.status == "successful";
    if (data.status == "successful") {
      savePayment({
        ...data,
        userId: "userid",
        serviceId: "id",
        amount: "500",
      });
      setButtonEnable(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.cardTitle1, { marginTop: 15 }]}>Services</Text>

      <View style={styles.cardInfo1}>
        <View
          style={{
            height: 130,
            marginTop: 3,
            marginBottom: "1%",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View horizontal={true} showsHorizontalScrollIndicator={false}>
            <Saloon imageUrl={route.params.imageUrl} />
          </View>
          <View styles={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.cardTitle}>Tina Beauty saloon</Text>
            <Text style={styles.cardTitle}>
              7b admiralty way Lekki phase 1
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.cardTitle}>{route.params.name}</Text>
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
            <Text
              style={{ fontWeight: "bold", marginLeft: "15%" }}
            >{`₦${route.params.amount}`}</Text>
          </View>
        </View>
      </View>

      {/* Total Pay */}
      <View style={styles.totalPay}>
        <Text style={styles.cardTitle}>Total Pay</Text>
        <Text style={styles.totalAmount}>₦2500</Text>
      </View>

      {/* Payment methods  */}
      <Text style={[styles.cardTitle1, { marginTop: 25 }]}>
        Payment Methods
      </Text>
      <View
        style={{
          flexDirection: "column",
          marginTop: 10,
          height: "50%",
          // marginBottom: 15,
        }}
      >
        <PayWithFlutterwave
          onRedirect={payWithFlutterwave}
          options={{
            tx_ref:
              "transactirto90jhndf6787867gRfklg98hjkuoirtrteyuferesrffnce",
            authorization: "FLWPUBK_TEST-935a39f93df6bd5f16fee811973837ac-X",
            customer: {
              email: "customer-email@example.com",
            },
            amount: 200,
            currency: "NGN",
            payment_options: "card",
          }}
        />

        <TouchableOpacity
          style={styles.cardInfo}
          onPress={() => setButtonEnable(!isEnabled)}
        >
          <Text style={[styles.cardTitle, { marginTop: 10 }]}>
            Payment in cash
          </Text>
          {/* <StarRating ratings={itemData.ratings} reTouchableOpacitys={itemData.reTouchableOpacitys} /> */}
          {isEnabled ? null : (
            <Image
              source={icons.whiteCheck}
              style={{ marginTop: 5, marginLeft: "50%" }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "95%",
    alignSelf: "center",
    flexDirection: "column",
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
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginTop: 10,
    height: 60,
    elevation: 1,
    flexDirection: "row",
    alignContent: "space-between",
  },
  cardInfo1: {
    flexDirection: "column",
    padding: 10,
    borderColor: "#ccc",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    marginTop: 10,
    height: 300,
    elevation: 1,
  },
  totalPay: {
    padding: 10,
    borderColor: "#ccc",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    height: "9%",
    marginTop: 2,
    elevation: 1,
    flexDirection: "row",
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
  },

  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});

function mapStateToProps(state) {
  return {
    payment: state.paymentReducer.payment,
    loading: state.paymentReducer.loading,
    isEnabled: state.tabReducer.isEnabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savePayment: (state) => {
      return dispatch(setPayment(state));
    },

    setButtonEnable: (state) => {
      return dispatch(setBookButtonEnable(state));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payments);
