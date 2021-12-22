import * as React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ServiceList, ServiceCategory, OffersCategory, OptionItem } from "./";

import { images, icons, COLORS, FONTS, SIZES } from "../constants";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
  setCategory,
  getAllService,
  setCardSelected,
  setAptmntBtn,
} from "../stores/service/serviceActions";

const Service = ({
  navigation,
  categoryId,
  saveCategory,
  saloonServices,
  fetchAllService,
  saveCardSelected,
  cardSelected,
  enableAptmntBtn,
  aptmntBtnDisabled,
}) => {
  React.useEffect(() => {
    fetchAllService();
  }, []);

  const category = [
    { id: 1, label: "All", icon: icons.allImg },
    { id: 2, label: "Skin care", icon: icons.skincare },
    { id: 3, label: "Make up", icon: icons.makeup },
    { id: 4, label: "Hair color", icon: icons.haircolor },
  ];
  let scroll = 0;

  const onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - scroll;
    // console.log("DIF=", dif)

    if (dif < 0 || scroll < 0) {
      navigation.setOptions({ tabBarVisible: true });
      // setIsVisible(true)
    } else {
      navigation.setOptions({ tabBarVisible: false });
      // setIsVisible(false)
    }

    scroll = currentOffset;
  };

  const filterServices = () => {
    if (categoryId == 2)
      return saloonServices.filter((item) => item.category == "skincare");
    if (categoryId == 4)
      return saloonServices.filter((item) => item.category == "haircolor");
    if (categoryId == 3)
      return saloonServices.filter((item) => item.category == "makeup");
    return saloonServices;
  };


  

  return (
    <View style={{ height: "100%" }}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        onScroll={(e) => onScroll(e)}
      >
        <View style={{ backgroundColor: "white", paddingTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            {category.map((item, index) => {
              return (
                <OptionItem
                  key={index}
                  icon={item.icon}
                  labelStyle={{
                    color: categoryId == item.id ? "#FF7E00" : "black",
                  }}
                  label={item.label}
                  onPress={() => {
                    saveCategory(item.id);
                  }}
                />
              );
            })}
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingHorizontal: 20,
              marginTop: "8%",
            }}
          >
            Packages & Offers
          </Text>

          <View style={{ height: 200, marginTop: 20, marginBottom: "6%" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
            >
              <OffersCategory
                imageUri={images.offerBraid}
                name="Happy moment event"
                period="Aug 21 - Nov 10"
                price="₦15,000"
              />
              <OffersCategory
                imageUri={images.offerSkinCare}
                name="Girls child event"
                period="Jan 5  -  June 10"
                price="₦10,000"
              />
              <OffersCategory
                imageUri={images.offerBeauty}
                name="Service opening event"
                period="Oct 5 - Dec 31"
                price="₦20,000"
              />
            </ScrollView>
          </View>
          <ServiceList
            navigation={navigation}
            data={filterServices()}
            saveCardSelected={saveCardSelected}
            cardSelected={cardSelected}
            enableAptmntBtn={enableAptmntBtn}
          />
        </View>
      </ScrollView>

      <View style={[styles.Button]}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.replace("BookAppointment", cardSelected)}
          disabled={aptmntBtnDisabled}
        >
          <LinearGradient
            colors={
              aptmntBtnDisabled
                ? ["#D1D5DBF0", "#D1D5DBF0"]
                : ["#FF7E00", "#FF7E00"]
            }
            style={styles.signIn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: aptmntBtnDisabled ? "grey" : "white",
                },
              ]}
            >
              Book Appointment
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    marginTop: 430,
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
  },
  signIn: {
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return {
    categoryId: state.serviceReducer.categoryId,
    saloonServices: state.serviceReducer.services,
    cardSelected: state.serviceReducer.cardSelected,
    aptmntBtnDisabled: state.serviceReducer.aptmntBtnDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveCategory: (state) => {
      // console.log("ANOTHER USER: ", state);
      return dispatch(setCategory(state));
    },
    saveCardSelected: (state) => {
      // console.log("ANOTHER USER: ", state);
      return dispatch(setCardSelected(state));
    },

    fetchAllService: (state) => {
      return dispatch(getAllService(state));
    },

    enableAptmntBtn: (state) => {
      return dispatch(setAptmntBtn(state));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Service);
