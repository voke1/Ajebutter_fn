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
  ActivityIndicator,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { connect } from "react-redux";
import { Stylist, Slot } from "../../../components";
import { icons, images, SIZES } from "../../../constants";
import moment from "moment";
import {
  getAllSpecialist,
  setSelectedSpecialist,
} from "../../../stores/specialist/specialistActions";
import {
  setBooking,
  setSelectedDay,
  // setSelectedSlot,
} from "../../../stores/booking/bookingActions";
import { setBookButtonEnable } from "../../../stores/tab/tabActions";

// splitTime()

const BookAppointment = ({
  navigation,
  setSpecialists,
  specialists,
  saveBooking,
  setButtonEnable,
  isEnabled,
  selectedDay,
  saveSelectedDay,
  selectedSpecialist,
  saveSelectedSpecialist,
  // selectedSlot,
  saveSelectedSlot,
  route,

  // markedDates,
  // saveMarkedDates,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const [availableSlots, setAvailableSlots] = React.useState([]);
  // const [selectedSpecialist, setSelectedSpecialist] = React.useState(null);
  const [selectedSlot, setSelectedSlot] = React.useState("");
  const [selected, setSelected] = React.useState(false);
  const [chooseSpecialist, setChooseSpecialist] = React.useState(false);
  const [markedDates, setMarkedDates] = React.useState({
    selectedDay: { selected: true, color: "#FF7E00", textColor: "white" },
  });

  React.useEffect(() => {
    console.log("ROUTE PARAMS: ", route)
    setSpecialists();
    // saveSelectedSpecialist(specialists[0])
    // getSlots(selectedDay);
                    // setButtonEnable(true);

  }, []);

  // console.log("duration selected: ", selectedSlot)

  //get slots for selected date

  const splitTime = (startTime, endTime, interval) => {
    const result = [startTime.toString()];
    let time = startTime.add(interval, "m");
    while (time.isBetween(startTime, endTime, undefined, [])) {
      // console.log("CHECK TIME: ", time);
      result.push(time.toString());
      time = time.add(interval, "m");
    }
    return result;
  };

  function getSlots(date) {
    let markDates = {};
    // console.log("selected date: ", date);
    //set selectedDate,
    if (date) saveSelectedDay(date);
    // selectedDateFormat = selectedDate.dateString;
    // let [dateString] = Object.keys(date);
    // var firstKeyValue = date[Object.keys(date)[0]]; //"Steve"
    markDates[date] = {
      selected: true,
      color: "#FF7E00",
      textColor: "white",
    };

    setMarkedDates(markDates);

    const interval = 45;
    const startTime = new moment({
      hour: "08",
      minute: "00",
    });
    const endTime = new moment({
      hour: 18,
      minute: "00",
    });

    let timeSlices = splitTime(startTime, endTime, interval);
    // console.log('TIMESLICES: ', timeSlices)

    let results = [];

    for (let i = 0; i < timeSlices.length - 1; i++) {
      results.push(timeSlices[i] + " - " + timeSlices[i + 1]);
    }
    setAvailableSlots(results);
  }

  function getTimeDuration(item) {
    let result = item.split(" - ");
    let time = `${moment(result[0]).format("hh:mm")} - ${moment(
      result[1]
    ).format("hh:mm A")}`;
    return time;
  }

  function renderSlots() {
    let n = 1;
    return (
      <ScrollView
        contentContainerStyle={{
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        { chooseSpecialist && availableSlots.map((item, index) => {
          const newItem = { ...item, id: n++ };
          return (
            <Slot
              key={index}
              contentContainerStyle={{
                backgroundColor:
                  selectedSlot == newItem.id ? "#FF7E00" : "white",
              }}
              labelStyle={{
                color: selectedSlot == newItem.id ? "white" : "black",
              }}
              onPress={() => {
                // setSelected(!selected);
                setSelectedSlot(newItem.id);
                saveBooking({
                  userId: "id",
                  service: "serviceId",
                  specialist: "specialist",
                  selectedSlot,
                });
                setButtonEnable(false);
              }}
              label={getTimeDuration(item)}
            />
          );
        })}
      </ScrollView>
    );
  }

  function renderSpecialist() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        {specialists?.map((item, index) => {
          return (
            <Stylist
              key={index}
              isSelected={selectedSpecialist == item._id ? true : false}
              imageUrl={item.imageUrl}
              name={item.name}
              onPress={() => {
                saveSelectedSpecialist(item._id);
                setChooseSpecialist(true)
                getSlots(selectedDay);
              }}
            />
          );
        })}
      </ScrollView>
    );
  }

  return (
    <View>
      <View
        style={{
          zIndex: 0,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: "95%",
              height: 275,
              marginTop: 10,
              alignSelf: "center",
              borderRadius: 3,
              backgroundColor: "green",
              borderWidth: 0,
              elevation: 5,
              borderColor: "#ccc",
            }}
          >
            <Calendar
              enableSwipeMonths={true}
              hideExtraDays
              onDayPress={(day) => {
                getSlots(day.dateString);
                saveSelectedDay(day.dateString);
              }}
              minDate={moment().format("YYYY-MM-DD")}
              markingType="simple"
              markedDates={markedDates}
              style={{
                borderRadius: 3,
                height: 275,
                borderWidth: 0,
                elevation: 5,
                borderColor: "#ccc",
                shadowColor: "#999",
                shadowOffset: {
                  width: 5,
                  height: 50,
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
              }}
              theme={{
                "stylesheet.calendar.main": {
                  week: {
                    marginTop: 5,
                    marginBottom: 5,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  },

                  dayContainer: {
                    flex: 1,
                    alignItems: "center",
                    height: 20,
                  },
                },
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#b6c1cd",
                textSectionTitleDisabledColor: "#d9e1e8",
                selectedDayBackgroundColor: "#FF7E00",
                // selectedDayTextColor: "white",
                todayTextColor: "#FF7E00",
                textDisabledColor: "#d9e1e8",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "#2E3A59",
                disabledArrowColor: "#d9e1e8",
                monthTextColor: "#2E3A59",
                indicatorColor: "blue",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
            />
          </View>

          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Choose specialist</Text>

              {renderSpecialist()}
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Available slot</Text>
              {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}

              {renderSlots()}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
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
  card: {
    height: 150,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 8,
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
    borderWidth: 1,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: "#ccc",
    shadowColor: "#999",
    shadowOffset: { width: 5, height: 50 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    bottom: 0,
  },
});

function mapStateToProps(state) {
  return {
    specialists: state.specialistReducer.specialists,
    loading: state.specialistReducer.loading,
    booking: state.bookingReducer.booking,
    isEnabled: state.tabReducer.isEnabled,
    selectedDay: state.bookingReducer.selectedDay,
    markedDates: state.bookingReducer.markedDates,
    selectedSpecialist: state.specialistReducer.selectedSpecialist,
    selectedSlot: state.bookingReducer.selectedSlot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpecialists: (state) => {
      return dispatch(getAllSpecialist(state));
    },
    saveBooking: (state) => {
      return dispatch(setBooking(state));
    },
    setButtonEnable: (state) => {
      return dispatch(setBookButtonEnable(state));
    },
    saveSelectedDay: (state) => {
      return dispatch(setSelectedDay(state));
    },
    saveMarkedDates: (state) => {
      return dispatch(setMarkedDates(state));
    },
    saveSelectedSpecialist: (state) => {
      return dispatch(setSelectedSpecialist(state));
    },
    saveSelectedSlot: (state) => {
      return dispatch(setSelectedSlot(state));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAppointment);
