import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppointmentViews } from "../../screens";

const AppointmentMain = (props) => {
  React.useEffect(() => {
  }, []);

  return <AppointmentViews />;
};

export default AppointmentMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
