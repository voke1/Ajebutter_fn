import * as React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { History, AppointmentCalender } from "../";


const AppointViews = ({ navigation }) => {
  const ServiceRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      <History />
    </View>
  );

  const AboutRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      <AppointmentCalender />
    </View>
  );

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FF7E00" }}
      style={{ backgroundColor: "#fff" }}
      renderLabel={({ route, color }) => (
        <Text style={{ color: "#FF7E00", margin: 8, fontWeight: "bold" }}>
          {route.title}
        </Text>
      )}
      style={{ backgroundColor: "white" }}
    />
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "ongoing", title: "Ongoing" },
    { key: "history", title: "History" },
  ]);

  const renderScene = SceneMap({
    ongoing: AboutRoute,
    history: ServiceRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default AppointViews;
