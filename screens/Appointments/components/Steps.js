import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import StepHeader from "./stepbar/StepHeader";
import StepContent from "./stepbar/StepContent";
import StepFooter from "./stepbar/StepFooter";
import StepsContext from "../context/stepsContext";
import {
  images,
  icons,
  COLORS,
  FONTS,
  SIZES,
} from "../../../dashboard1/constants";
import { connect } from "react-redux";

const Steps = ({ routes, navigation, specialists }) => {
  const stepsContext = useContext(StepsContext);
  const { setSteps, setCurrentStep } = stepsContext;
  useEffect(() => {
    setSteps([...routes]);
    setCurrentStep(1);
  }, []);

  console.log("SPECIALISTS: ", specialists)

  return (
    <View style={styles.container}>
      <StepHeader navigation={navigation} />
      <StepContent />
      <StepFooter navigation={navigation} />
      {specialists ? null: (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#FF7E00" />
        </View>
      ) }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F4F4F4",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: "#F4F4F4",
    zIndex: 1,
  },
});

function mapStateToProps(state) {
  return {
    specialists: state.specialistReducer.specialists,
  };
}

export default connect(mapStateToProps)(Steps);
