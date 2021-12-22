import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES } from '../constants';


const BookProgress = ({  icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={onPress}
        >
            <View style={{ width: 10, height: 10, backgroundColor: "grey", borderRadius: 100  }}>
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: '#FF7E00',
                            width: 20,
                            height: 20,
                        }}
                    />
            </View>
            <Text style={{ marginTop: 15, color: COLORS.gray, fontSize: 10 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
});


export default BookProgress;