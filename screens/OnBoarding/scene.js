import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

// constants
import { images, theme } from "./constants";
const {
  onboarding1,
  onboarding2,
  onboarding3,
  saloon1,
  saloonProfessional1,
  saloonPromotion,
  saloonPromotion1,
} = images;

// theme
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
  {
    title: "Find saloons nearby",
    description:
      "Choose your hairstyle choose your hairstyle choose your hairstyle choose your...",
    img: saloon1,
  },
  {
    title: "Attractive promotions",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: saloonPromotion,
  },
  {
    title: "The Professional specialist",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: saloonProfessional1,
  },
];

const OnBoarding = (props) => {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 2) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "70%",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "12%",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 7,
                width: 150,
                height: 40,
                paddingLeft: 20,
                justifyContent: "center",
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: COLORS.pink,
              }}
              onPress={() => props.navigation.replace("LoginScreen")}
              // onPress={() => { console.log("Button on pressed") }}
            >
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                {completed ? "Get Started" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.pink,
    marginHorizontal: SIZES.radius / 2,
  },
});

OnBoarding.propTypes = {
  navigation: PropTypes.any,
};

export default OnBoarding;
