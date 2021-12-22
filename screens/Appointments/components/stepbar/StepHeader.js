import React, { useContext, setGlobal, getGlobal } from "reactn";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import StepsContext from "../../context/stepsContext";
import { icons, images } from "../../../../constants";

const Circle = ({ index, selectedIndex, color }) => {
  return (
    <View
      style={
        index === selectedIndex
          ? {
              ...styles["circle"],
              backgroundColor: "#FF7E00",
              width: 20,
              height: 20,
            }
          : { ...styles["circle"], backgroundColor: color || "#979797" }
      }
    >
      <Image
        source={index === selectedIndex ? icons.plus : ""}
        style={
          index === selectedIndex
            ? styles["selectedcircleTitle"]
            : styles["circleTitle"]
        }
      />
    </View>
  );
};

const selectColor = (currentStepIndex, index) => {
  if (currentStepIndex == 2 && index == 1) {
    return "#FF7E00";
  } else if (currentStepIndex == 3 && (index == 1 || index == 2)) {
    return "#FF7E00";
  } else {
    return "";
  }
};

const StepHeader = ({ navigation }) => {
  const MAX_NUMBER_LINES = 2;
  const stepsContext = useContext(StepsContext);
  const { steps, currentStepIndex, setCurrentStep } = stepsContext;
  console.log("CURRENTSTEPINDEX: ", currentStepIndex);

  const previous = () => {
    setCurrentStep(
      currentStepIndex <= 1 ? currentStepIndex : currentStepIndex - 1
    );
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <View>
        <TouchableOpacity
          onPress={
            currentStepIndex == 1
              ? () => navigation.navigate("MainLayout")
              : previous
          }
        >
          <Image
            source={icons.leftArrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              marginLeft: "3%",
              marginTop: 9,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{ color: "#2E3A59", textAlign: "center", fontWeight: "bold" }}
        >
          Book Appointment
        </Text>
      </View>

      <View style={styles.container}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Circle
              selectedIndex={currentStepIndex}
              index={++index}
              color={selectColor(currentStepIndex, index)}
            />
            <Text
              numberOfLines={MAX_NUMBER_LINES}
              ellipsizeMode="tail"
              style={styles.titleCircle}
            >
              {step.title}
            </Text>
          </View>
        ))}
        <View
          style={{
            ...styles["line"],
            borderBottomColor:
              currentStepIndex == 2 || currentStepIndex == 3
                ? "#FF7E00"
                : "#979797",
          }}
        />
        <View
          style={{
            ...styles["line1"],
            borderBottomColor: currentStepIndex == 3 ? "#FF7E00" : "#979797",
          }}
        />
      </View>
    </View>
  );
};

export default StepHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: 70,
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
  },
  stepContainer: {
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "32%",
  },
  titleCircle: {
    marginTop: 15,
    fontSize: 12,
    paddingBottom: 10,
    color: "#2E3A59",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#979797",
    justifyContent: "center",
    width: "25%",
    position: "absolute",
    top: 15,
    marginHorizontal: 80,
  },
  line1: {
    borderBottomWidth: 1,
    borderBottomColor: "#979797",
    justifyContent: "center",
    width: "25%",
    position: "absolute",
    top: 15,
    marginHorizontal: 218,
  },
  circle: {
    // borderWidth: 1,
    // borderColor: '#979797',
    borderRadius: 50,
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginRight: 12,
    zIndex: 1,
  },
  circleTitle: {
    fontSize: 12,
    color: "#FF7E00",
  },
  selectedcircleTitle: {
    fontSize: 12,
    color: "#fff",
  },
});
