/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable global-require */
/* eslint-disable quotes */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
import * as React from 'reactn';
import { View, Text, Image, FlatList, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import AppointmentCalendar from '../../dashboard1/components/AppointmentCalendar';
// eslint-disable-next-line import/no-useless-path-segments
import About from '../../dashboard1/components/About';
// import styles from './styles';
// import {icons } from '../constants';
import { images, icons, COLORS, FONTS, SIZES } from '../../dashboard1/constants';
import ViewTabs from '../../dashboard1/components/ViewTabs';
import BookProgress from '../../dashboard1/components/BookProgress';
import Card from '../services/components/Card';
import { Calendar } from 'react-native-calendars';
import img1 from '../services/assets/banners/food-banner1.jpg';
import LinearGradient from 'react-native-linear-gradient';
import OffersCategory from '../../dashboard1/components/OffersCategory';
import Stylists from '../../dashboard1/components/Stylists';
import Slot from '../../dashboard1/components/slot';

const Payment = ({navigation}) => {
   
      return (
    <View>
    <SafeAreaView style={{ flex: 1}}>
                <View style={{ backgroundColor: "#8F9BB3", height: 850 }}>
                    <View style={{ height: 130, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <TouchableOpacity
                                onPress={() => navigation.navigate("Discover")}
                            >
                                <Image
                                    source={icons.leftArrow}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginLeft: '3%',
                                        marginTop: 12

                                    }}
                                />
                            </TouchableOpacity>    
                          <Text style={{color: 'black', textAlign: 'center'}}>Book Appointment</Text>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                                     <BookProgress
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Appointment"
                        onPress={() => { console.log("Flight") }}
                    />
                    <View
                        icon={icons.train}
                        // bgColor={['#fddf90', '#fcda13']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                        style={{width: 100,height: 2, backgroundColor: "grey"}}
                    />
                    <BookProgress
                        icon={icons.bus}
                        // bgColor={['#e973ad', '#da5df2']}
                        label="Payment"
                        onPress={() => { console.log("Bus") }}

                    />
                   <View
                        icon={icons.train}
                        // bgColor={['#fddf90', '#fcda13']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                        style={{width: 100,height: 2, backgroundColor: "grey"}}
                    />
                       <BookProgress
                        icon={icons.taxi}
                        // bgColor={['#fddf90', '#fcda13']}
                        label="Finished"
                        onPress={() => { console.log("Train") }}
                    />
                </View>
 </View>

                   
        
  
      <View style={styles.card}>
        <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Choose specialist</Text>

<View style={{ height: 130, marginTop: 3, marginBottom: '10%' }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Stylists imageUri={require('../../dashboard1/assets/home.jpg')}
                                        name="Home"
                                    />
                                    <Stylists imageUri={require('../../dashboard1/assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Stylists imageUri={require('../../dashboard1/assets/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                       <Stylists imageUri={require('../../dashboard1/assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                </ScrollView>
                                
                            </View>


   </View>
      </View>
    
    <TouchableOpacity >
      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Available slot</Text>
          {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}

<View style={{  flexDirection: 'row', marginTop: 5, }}>
                                     <Slot
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Appointment"
                        onPress={() => { console.log("Flight") }}
                    />
                
                    <Slot
                        icon={icons.bus}
                        // bgColor={['#e973ad', '#da5df2']}
                        label="Payment"
                        onPress={() => { console.log("Bus") }}

                    />
              
              
                </View>
                


        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.Button}>

                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => navigation.replace('FinishedPaymentScene')}
                >
                <LinearGradient
                    colors={['#FF7E00', '#FF7E00']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Confirm payment</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
          

                
                    
                </View>
                                          
            </SafeAreaView>

   
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: '90%',
      alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
    height: 150,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  });