import * as React from "reactn";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { data } from "../../constants/dataAbout";
import { CardHistory } from "../../components";
import LinearGradient from "react-native-linear-gradient";
import { useGlobal } from "reactn";

const History = (props) => {
  const [global, setGlobal] = useGlobal();

  const renderItem = ({ item }) => {
    return <CardHistory itemData={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flex: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#F4F4F4",
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
