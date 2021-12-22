import * as React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { About, Gallery, Service } from "../../components";

const ViewTabs = ({ navigation }) => {
  const ServiceRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <Service navigation={navigation} />
    </View>
  );

  const AboutRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <About navigation={navigation} />
    </View>
  );

  const GalleryRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <Gallery />
    </View>
  );

  const renderTabBar = (props) => {
    
   return ( <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FF7E00" }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route, focused, color }) => {
        // console.log('ROUTE: ', focused)
       return ( <Text
          style={{
            color: focused ? "#FF7E00" : "black",
            margin: 5,
            focused,
          }}
        >
          {route.title}
        </Text>)
      }}
    />)
    };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "about", title: "About" },
    { key: "services", title: "Services" },
    { key: "gallery", title: "Gallery" },
  ]);

  const renderScene = SceneMap({
    about: AboutRoute,
    services: ServiceRoute,
    gallery: GalleryRoute,
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

export default ViewTabs;
