import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Profile, Nearby, Appointment, Discover } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          // backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: "black",
          shadowOpacity: 0.5,
          elevation: 5,
          height: 60,
          padding: 6,
          paddingTop: 15,
        },
        activeTintColor: "#FF7E00",
        inactiveTintColor: "grey",
        BottomTabBarHeightContext: 100,
        tabBarHeight: 47,
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <Image
                source={icons.discover}
                resizeMode="cover"
                style={{ height: 45, width: 45, tintColor }}
              />
            );
            // }
          },
        }}
      />

      {/* <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={{
          tabBarIcon: ({ tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <Image
                source={icons.nearby}
                resizeMode="cover"
                style={{ height: 45, width: 45, tintColor }}
              />
            );
            // }
          },
        }}
      /> */}
      <Tab.Screen
        name="Appointments"
        component={Appointment}
        options={{
          tabBarIcon: ({ tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <Image
                source={icons.appointment}
                resizeMode="cover"
                style={{ height: 45, width: 45, tintColor }}
              />
            );
            // }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <Image
                source={icons.profile}
                resizeMode="cover"
                style={{ height: 45, width: 45, tintColor }}
              />
            );
            // }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
