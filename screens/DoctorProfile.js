import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, StatusBar, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Report from '../components/Report';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Searchbar } from 'react-native-paper';
import { useFonts } from 'expo-font';


const data = [
    {
        name: "Harry Smith",
        role: "Patient",
        report: {
            sugar: 40,
            glucose: 65,
            blood_pressure: 94
        }
    }
]

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function DoctorProfile({ navigation }) {

    const [loaded] = useFonts({
        'Manrope': require('../assets/Manrope.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <StatusBar animated={true}
                backgroundColor="#53666c"
                barStyle={"light-content"}
                showHideTransition={"slide"}
            />
            <ImageBackground source={require('../images/doctor_bg.jpeg')} resizeMode="cover">
                <View style={{height: height*0.4, display: "flex", alignItems: "center", marginTop: 40}}>
                    <View style={{width: "85%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Image style={{width:40, height: 40, borderRadius: 50}} source={require("../images/user.webp")} />
                        <View style={{backgroundColor: "#D3D3D3", display: "flex", justifyContent: "center", alignItems: "center", width: 45, height: 45, borderRadius: 50}}>
                            <MaterialIcons name="notifications-none" size={22} color={"black"} />
                        </View>
                    </View>
                    <View style={{width: "85%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
                        <View>
                            <Text style={{fontSize: 40, fontWeight: "bold", fontFamily: "Manrope"}}>Welcome!</Text>
                            <Text style={{fontSize: 40, fontWeight: "bold", fontFamily: "Manrope"}}>Doctor</Text>
                            <Text style={{fontSize: 18, fontWeight: "bold", fontFamily: "Manrope", marginTop: 10}}>How is it going today?</Text>
                            <TouchableOpacity style={styles.button} onPress={() => {}}>
                                <MaterialIcons name="notifications" size={20} color={"white"} style={{ marginLeft: 5 }} />
                                <Text style={styles.buttontext}>Urgeny Care</Text>
                            </TouchableOpacity>
                        </View>
                        <></>
                    </View>
                </View>
            </ImageBackground>
            <View style={{marginTop: -20, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", display: "flex", alignItems: "center"}}>
                <View style={{width: "85%", marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{fontFamily: "Manrope", fontWeight: "bold", fontSize: 18}}>Reports of Patients</Text>
                    <Text style={{fontFamily: "Manrope", fontWeight: "bold", fontSize: 18, color: "#145DA0"}}>See All</Text>
                </View>
                <Report patient={data[0]}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
        alignItems: 'center'
    },
    heading: {
        
    },
    text: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        color: "gray"
    },
    button: {
        width: width * 0.35,
        backgroundColor: "#FFA500",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30
    },
    buttontext: {
        fontSize: 15,
        marginRight: 10,
        color: "white",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: "bold"
    },
    footer: {
        fontSize: 15,
        color: "#C7C7C7",
        textAlign: "center"
    }
});