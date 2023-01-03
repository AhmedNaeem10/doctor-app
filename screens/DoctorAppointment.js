import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, StatusBar, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Report from '../components/Report';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Searchbar } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Appointment from '../components/Appointment';

const data = [
    {
        name: "Obaid Ullah",
        role: "Patient",
        upcoming: false,
        date_time: "Wed Jun 20  ⬤  8:00 - 8:30 AM"
    },
    {
        name: "Shahab Ghouri",
        role: "Patient",
        upcoming: true,
        date_time: "Wed Jan 20  ⬤  9:00 - 9:30 PM"
    },
    {
        name: "Sherlock Holmes",
        role: "Patient",
        upcoming: true,
        date_time: "Wed Mar 20  ⬤  10:00 - 10:30 AM"
    },
    {
        name: "James Bond",
        role: "Patient",
        upcoming: false,
        date_time: "Tue July 02  ⬤  9:00 - 9:30 AM"
    },
    {
        name: "John Watson",
        role: "Patient",
        upcoming: false,
        date_time: "Wed Jun 20  ⬤  11:00 - 11:30 AM"
    },
    {
        name: "Michael Jackson",
        role: "Patient",
        upcoming: true,
        date_time: "Fri Feb 04  ⬤  8:00 - 8:30 AM"
    }
]

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function DoctorAppointment({ navigation }) {
    // true means upcoming
    const [category, setCategory] = useState(true);
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
            <View style={{marginTop: 40}}>
                <View style={{display: "flex", alignItems: "center"}}>
                    <View style={{width: width*0.85}}>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontSize: 40, fontWeight: "bold", fontFamily: "Manrope"}}>Appointment</Text>
                            <View style={{backgroundColor: "#D3D3D3", display: "flex", justifyContent: "center", alignItems: "center", width: 45, height: 45, borderRadius: 50}}>
                                <MaterialIcons name="notifications-none" size={22} color={"black"} />
                            </View>
                        </View>
                        <View style={{marginTop: 30, height: 50, backgroundColor: "#D3D3D3", borderRadius: 30, display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <TouchableOpacity style={{width: width*0.85*0.5}} onPress={()=>{setCategory(true)}}>
                                <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 45, backgroundColor: category ? "white" : "#D3D3D3", borderRadius: 30, marginLeft: 2.5}}>
                                    <Text style={{fontWeight: category ? "bold": "normal"}}>Upcoming</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{width: width*0.85*0.5}} onPress={()=>{setCategory(false)}}>
                            <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 45, backgroundColor: !category ? "white" : "#D3D3D3", borderRadius: 30, marginRight: 2.5}}>
                                    <Text style={{fontWeight: !category ? "bold": "normal"}}>Past</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{height: height - 240}}>
                        {
                            data.map((patient, key)=>{
                                return(
                                    patient.upcoming == category ? 
                                    <Appointment patient={patient} key={key} />
                                    : <></>
                                );
                            })
                        }
                        </ScrollView>
                    </View>
                </View>
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