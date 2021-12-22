import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BellaWhite from "../../assets/images/bella_white.png";
import { icons, SIZES, images } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";
import { signup } from "../../stores/auth/authActions";

const RegisterScene = ({ register, navigation, user, loading }) => {
  const [userState, setUserState] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");

  function isEnableSignUp() {
    return (
      userState.email != null &&
      userState.lastName != null &&
      userState.firstName != null &&
      userState.password != null
      // emailError == "" &&
      // passwordError == "" &&
      // usernameError == ""
    );
  }


  async function registerHandler() {
    let result = await register(userState);
    console.log("RESULTSDFS: ", result.success);
    if (result.success  == true) {
     navigation.navigate("MainLayout");
      console.log('got here: ')
    } else {
      Alert.alert("An Error occurred", [{ text: "Okay" }]);
      return;
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF7E00" barStyle="light-content" />
      <View style={styles.header}>
        <Image source={BellaWhite} style={{ marginLeft: "16%" }} />
        {/* <Text style={styles.text_header}>Welcome!</Text> */}
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "white",
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: "#009387",
            },
          ]}
        >
          First Name
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your First Name"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(value) =>
              setUserState({ ...userState, ...{ firstName: value } })
            }
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              source={
                userState.firstName == null ||
                (userState.firstName != "" && firstNameError == "")
                  ? icons.correct
                  : icons.cancel
              }
              style={{
                height: 20,
                width: 20,
                tintColor:
                  userState.firstName == null
                    ? "grey"
                    : userState.firstName != null && firstNameError == ""
                    ? "green"
                    : "red",
              }}
            />
          </View>
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: "#009387",
              marginTop: 15,
            },
          ]}
        >
          Last Name
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Last Name"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(value) =>
              setUserState({ ...userState, ...{ lastName: value } })
            }
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              source={
                userState.lastName == null ||
                (userState.lastName != null && lastNameError == "")
                  ? icons.correct
                  : icons.cancel
              }
              style={{
                height: 20,
                width: 20,
                tintColor:
                  userState.lastName == null
                    ? "grey"
                    : userState.lastName != null && lastNameError == ""
                    ? "green"
                    : "red",
              }}
            />
          </View>
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: "#009387",
              marginTop: 15,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(value) => {
              //validate email
              utils.validateEmail(value, setEmailError);
              setUserState({ ...userState, ...{ email: value } });
            }}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              source={
                userState.email == null ||
                (userState.email != null && emailError == "")
                  ? icons.correct
                  : icons.cancel
              }
              style={{
                height: 20,
                width: 20,
                tintColor:
                  userState.email == null
                    ? "grey"
                    : userState.email != null && emailError == ""
                    ? "green"
                    : "red",
              }}
            />
          </View>
        </View>
        {emailError == "" ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{emailError}</Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: "#009387",
              marginTop: 15,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#009387" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={!showPass}
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(value) => {
              utils.validatePassword(value, setPasswordError);
              setUserState({ ...userState, ...{ password: value } });
            }}
          />
          <TouchableOpacity
            style={{
              width: 40,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onPress={() => setShowPass(!showPass)}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
              }}
              source={showPass ? icons.eye_close : icons.eye}
            />
          </TouchableOpacity>
        </View>

        {passwordError == "" ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{passwordError}</Text>
          </Animatable.View>
        )}

        <View style={[styles.button]}>
          <TouchableOpacity
            style={[styles.signIn]}
            disabled={isEnableSignUp() ? false : true}
            onPress={()=>registerHandler()}
          >
            <LinearGradient
              colors={
                isEnableSignUp()
                  ? ["#FF7E00", "#FF7E00"]
                  : ["#D8D8D8", "#D8D8D8"]
              }
              style={styles.signIn}
            >
              {loading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <Text style={{ color: "black", marginTop: 40 }}>
            Already have an account?
            <Text
              style={{ color: "#FF7E00" }}
              onPress={() => navigation.replace("LoginScreen")}
            >
              {" "}
              Sign In
            </Text>
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7E00",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    lineHeight: 22,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    loading: state.authReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (userState) => {
      console.log("ANOTHER USER: ", userState);
      return dispatch(signup(userState));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScene);
