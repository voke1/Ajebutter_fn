import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Profile } from "./screens";

import Tabs from "./navigation/tabs";
import BookAppointment from "./screens/Appointments/BookScene";
import Onboarding from "./screens/OnBoarding";
import Login from "./screens/login";
import Register from "./screens/register";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./stores/store";

const Stack = createStackNavigator();

export const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Onboarding"}
        >
          <Stack.Screen name="MainLayout" component={Tabs} />
          <Stack.Screen name="BookAppointment" component={BookAppointment} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegisterScreen" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
