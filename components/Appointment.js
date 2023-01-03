import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width;

export default Appointment = ({patient}) => {
    return(
        <View style={{width: width*.85, height: 160, marginTop: 20, backgroundColor: "white", display: "flex", justifyContent: "center", borderRadius: 10, padding: 0.3}}>
            <View style={{borderLeftColor: "#32CD30", borderLeftWidth: 4}}>
                <View style={{height: 60, display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", borderBottomColor: "gray", borderBottomWidth: 0.3}}>
                    <View style={{marginLeft: 10, height: 40, display: "flex", justifyContent: "space-around"}}>
                        <Text>Appointment date</Text>
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <MaterialCommunityIcons style={{marginRight: 10}} name="clock-outline" size={20} color={"black"} />
                            <Text>{patient.date_time}</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons style={{marginRight: 10}} name="dots-vertical" size={25} color={"gray"} />
                </View>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,height: 80}}>
                    <View style={{display: "flex", flexDirection: "row", height: 40, alignItems: "center"}}>
                        <Image style={{width:50, height: 50, borderRadius: 50, marginLeft: 10}} source={require("../images/user.webp")} />
                        <View style={{marginLeft: 10, display: "flex", justifyContent: "space-around", height: 40}}>
                            <Text style={{fontWeight: "bold"}}>{patient.name}</Text>
                            <Text>{patient.role}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{width: 120, backgroundColor: "#FFA500", borderRadius: 30, alignSelf: "center", marginTop: 20, marginRight: 10}} onPress={() => {}}>
                        <Text style={{paddingTop: 5, paddingBottom: 5, alignSelf: "center", color: "white", fontWeight: "bold"}}>Send E - Prescription</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}