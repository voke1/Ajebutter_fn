import { FlatList, StyleSheet, View } from "react-native";
import * as React from "reactn";
// import { useGlobal } from 'reactn';
import { CardAbout } from "./";
import { dataAbout } from "../constants";

const About = (props) => {
  props.navigation.setOptions({ tabBarVisible: true });
  
  const renderItem = ({ item }) => {
    return <CardAbout itemData={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataAbout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
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
});
