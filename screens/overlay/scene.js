import React, { Component } from 'react';
import {
  ImageBackground, StatusBar, Image, StyleSheet,
} from 'react-native';
import {
  Button,
  Text as NbText,
  View,
  InputGroup, Input,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import PhoneInput from 'react-native-phone-input';
import BaseScene from '../base/scene';
import Text from '../../components/text';
import { COLOUR_TRANSPARENT, COLOUR_GREEN } from '../../constants/styles';
import styles from './styles';
import zojaIcon from '../../assets/images/zojatech_icon.png';
import exclamImage from '../../assets/images/exclam.png';




const Overlay = (props) => {
  const { navigation } = props;
  console.log('landing props: ', props);

  return (
    <BaseScene
      style={styles.view}
    >
      <Icon
        style={{

          fontSize: 30,
          color: '#FFFFFF',
          size: 100,
          marginLeft: '85%',
          marginTop: '10%',
        }}
        name="close"
      />

      <View
        style={styles.innerContainer}

      >
        <View style={styles1.dot}>
          <Image
            style={{

              marginTop: '15%',
              marginLeft: '35%',
              color: 'white',
              size: 100,
            }}
            source={exclamImage}
          />
        </View>

        <View>

          <View>
            {/* First screen */}
            <View style={styles1.container}>

              {/* <Icon name="ios-home" {...iconStyles} /> */}
              <Text style={styles2.header}>Aww, Snap!</Text>
              {/* <Text style={styles2.text}>one</Text> */}
            </View>
          </View>

          <Text style={styles1.nb}>We could not find a Zojatech account with the Phone number provided</Text>
          <Button
            block
            title="Next"
            onPress={() => navigation.replace('Dashboard')}
            style={styles1.button}
          >
            <Text style={styles1.text}>Apply For Loan</Text>
          </Button>
          <Button
            block
            title="Next"
            onPress={() => navigation.replace('Dashboard')}
            style={styles1.button}
          >
            <Text style={styles1.text}>Invest</Text>
          </Button>
          <Button
            block
            title="Next"
            onPress={() => navigation.replace('Dashboard')}
            style={styles1.button}
          >
            <Text style={styles1.text}>Save</Text>
          </Button>
          <Text style={styles1.nb2}>By clicking on the any of the button above you agree to the <Text style={styles1.nb4}>terms and condition</Text> of this service</Text>
          <Text onPress={() => navigation.replace('Dashboard')}
            style={styles1.nb3}>
            Skip to Dashboard
          </Text>


        </View>
      </View>
      {/* </ImageBackground> */}
    </BaseScene>
  );
};

Overlay.propTypes = {
  navigation: PropTypes.any,
};

const styles1 = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50, // Rounded border
    borderWidth: 2, // 2 point border widht
    borderColor: '#05195C', // White colored border
    paddingHorizontal: 50, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    backgroundColor: '#05195C',
    height: 60,
    marginTop: '5%',
  },
  // Button text
  text: {
    color: '#FFFFFF',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    lineHeight: 22
  },
  nb: {
    color: '#FFFFFF',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 600,
    lineHeight: 19,
    marginTop: '7%',
    marginLeft: '5%',
    marginBottom: '9%'
  },
  nb2: {
    color: '#FFFFFF',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 16,
    marginTop: '5%',
    marginLeft: '8%',
    marginRight: '8%'
  },
  nb3: {
    color: '#05195C',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    marginTop: '7%',
    marginLeft: '5%',
    marginBottom: '9%',
    textTransform: 'capitalize',
  },
  nb4: {
    color: '#05195C',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'capitalize',
    lineHeight: 16,
    marginTop: '5%',
    marginLeft: '8%',
    marginRight: '8%',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#05195C',
    width: 135,
    height: 135,
    marginTop: '10%',
    marginBottom: 3,
    borderRadius: 68,
    marginLeft: '30%',
  },
  // Main container
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
});


const styles2 = StyleSheet.create({
  // Slide styles
  slide: {
    // flex: 1, // Take up all screen
    position: 'absolute',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#FFFFFF',
    // marginRight: 80
  },
  // Header styles
  header: {
    // position: 'absolute',
    color: '#FFFFFF',
    fontFamily: 'Nunito Sans',
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '7%',
    // marginBottom: '10%',
  },
  // Text below header
  text: {
    color: '#05195C',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

export default Overlay;
