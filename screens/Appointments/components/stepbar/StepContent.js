import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import StepsContext from '../../context/stepsContext';
import { ScrollView } from 'react-native-gesture-handler';

const StepContent = () => {
  const stepsContext = useContext(StepsContext);
  const { steps, currentStepIndex } = stepsContext;

  return (
    <View>
      {steps.length > 0 ? (
        steps[currentStepIndex - 1].component()
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#FF7E00" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default StepContent;


