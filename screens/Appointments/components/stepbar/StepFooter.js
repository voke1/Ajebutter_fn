import React, { useContext, setGlobal, useGlobal } from "reactn";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import StepsContext from "../../context/stepsContext";
import LinearGradient from "react-native-linear-gradient";
import { createAppointment } from "../../../../stores/appointment/appointmentActions";
import { createBooking } from "../../../../stores/booking/bookingActions";
import { makePayment } from "../../../../stores/payment/paymentActions";
import { setBookButtonEnable } from "../../../../stores/tab/tabActions";

const StepFooter = ({
  navigation,
  sendAppointment,
  sendBooking,
  sendPayment,
  appointment,
  booking,
  payment,
  isBookButonEnabled,
  setBookButtonEnable,
  isEnabled,
  setButtonEnable,
}) => {
  const stepsContext = useContext(StepsContext);
  const { currentStepIndex, steps, setCurrentStep } = stepsContext;

  const next = () => {
    stepsContext.setCurrentStep(
      currentStepIndex >= steps.length ? currentStepIndex : currentStepIndex + 1
    );
  };

  async function checkPayment() {
    try {
      //if step is 2 and is enable call api
      if (currentStepIndex == 2) {
        //call booking api
        let bookResult = await sendBooking(booking);
        console.log("BOOKRESULT: ", bookResult);

        console.log("payment that was sent: ", payment);

        //call payment api
        let paymentResult = await sendPayment(payment);
        console.log("PAYMENT RESULT: ", payment);

        let [booking, Payment] = await Promise.all([bookResult, paymentResult]);
        console.log("RETRIEVE RESULT: ", retrieveResult);
        //if successful then call appointment api
        if (booking && Payment) {
          let appointmentResult = await sendAppointment({
            id: "id",
            bookingId: "bookingId",
            paymentId: "paymentId",
          });

          console.log("APPOINTMENT RESULT: ", appointmentResult);
        }
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  function onPressHandler() {
    console.log("GOT HERE!!");
    if (currentStepIndex == 1) setButtonEnable(true);
    checkPayment();

    return currentStepIndex == 3
      ? () => {
          navigation.navigate("MainLayout");
          setButtonEnable(true);
        }
      : next();
  }

  return (
    <View >
      {currentStepIndex == 3 ? (
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn1}
            onPress={() => {
              navigation.navigate("MainLayout");
              setButtonEnable(true);
            }}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#FF7E00",
                },
              ]}
            >
              Go to Appointment
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => onPressHandler()}
          disabled={isEnabled}
        >
          <LinearGradient
            colors={isEnabled ? ["#D8D8D8", "#D8D8D8"] : ["#FF7E00", "#FF7E00"]}
            style={styles.signIn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              {currentStepIndex === steps.length
                ? "Book more Appointment"
                : currentStepIndex == 2
                ? "Confirm Payment"
                : "Next"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTitle: {
    padding: 15,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 8,
  },
  signIn: {
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signIn1: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF7E00",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return {
    payment: state.paymentReducer.payment,
    loading: state.paymentReducer.loading,
    booking: state.bookingReducer.booking,
    appointment: state.appointmentReducer.appointment,
    isEnabled: state.tabReducer.isEnabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendPayment: (state) => {
      // console.log("ANOTHER USER: ", state);
      return dispatch(makePayment(state));
    },

    sendAppointment: (state) => {
      // console.log("ANOTHER USER: ", state);
      return dispatch(createAppointment(state));
    },

    sendBooking: (state) => {
      // console.log("ANOTHER USER: ", state);
      return dispatch(createBooking(state));
    },

    setButtonEnable: (state) => {
      return dispatch(setBookButtonEnable(state));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepFooter);
