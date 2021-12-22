import * as React from "reactn";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CardService } from "./";
import LinearGradient from "react-native-linear-gradient";
import { useState, useGlobal } from "reactn";

const ServiceList = ({
  navigation,
  data,
  saveCardSelected,
  cardSelected,
  enableAptmntBtn,
}) => {
  // const [cardSelected, setCardSelected] = useState(false);
  // React.useEffect(() => {
  //   enableAptmntBtn(true);
  // });

  const renderItem = ({ item, index }) => {
    return (
      <CardService
        itemData={item}
        isSelected={item._id == cardSelected._id ? true : false}
        onPress={() => {
          saveCardSelected(item);
          enableAptmntBtn(false);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "bold" }}>
        Services
      </Text>
      <FlatList
        navigate
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled
        // ListFooterComponent={<View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default ServiceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "100%",
    alignSelf: "center",
    marginBottom: "47%",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: "20%",
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
