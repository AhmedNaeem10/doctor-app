import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width;

export default Report = ({patient}) => {
    return(
        <View style={{alignSelf: "center", marginTop: 20, backgroundColor: "white"}}>
            <View style={{padding: 15, width: width*0.85, borderBottomColor: "gray", borderBottomWidth: 0.3}}>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display: "flex", flexDirection: "row", height: 40, alignItems: "center"}}>
                        <Image style={{width:40, height: 40, borderRadius: 50}} source={require("../images/user.webp")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontWeight: "bold"}}>{patient.name}</Text>
                            <Text>{patient.role}</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons style={{marginTop: 10}} name="dots-vertical" size={25} color={"gray"} />
                </View>
            </View>
            <View style={{padding: 15, width: width*0.85, marginTop: 20}}>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <View style={{alignSelf: "center", backgroundColor: "#145DA0", height: 60, width: 60, borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}><Text style={{color: "white", fontSize: 20}}>{patient.report.sugar}</Text></View>
                        <Text style={{alignSelf: "center", fontSize: 15, fontWeight: "bold", marginTop: 10}}>Sugar</Text>
                    </View>
                    
                    <View>
                        <View style={{alignSelf: "center", backgroundColor: "#145DA0", height: 60, width: 60, borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}><Text style={{color: "white", fontSize: 20}}>{patient.report.blood_pressure}</Text></View>
                        <Text style={{alignSelf: "center", fontSize: 15, fontWeight: "bold", marginTop: 10}}>Blood Pressure</Text>
                    </View>

                     <View>
                        <View style={{alignSelf: "center", backgroundColor: "#145DA0", height: 60, width: 60, borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}><Text style={{color: "white", fontSize: 20}}>{patient.report.glucose}</Text></View>
                        <Text style={{alignSelf: "center", fontSize: 15, fontWeight: "bold", marginTop: 10}}>Glucose</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{width: width * 0.4, backgroundColor: "#FFA500", borderRadius: 30, alignSelf: "center", marginTop: 40, marginBottom: 30}} onPress={() => {}}>
                <Text style={{padding: 15, alignSelf: "center", color: "white", fontWeight: "bold"}}>Set an appointment</Text>
            </TouchableOpacity>
        </View>
    );
}