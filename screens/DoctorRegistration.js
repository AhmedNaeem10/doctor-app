import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Searchbar } from 'react-native-paper';
import { useFonts } from 'expo-font';

const width = Dimensions.get('window').width;
export default function Landing({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [patients, setPatients] = useState(0);
    const [designation, setDesignation] = useState("");

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
            <View style={styles.container}>

                <View>
                    <Text style={styles.heading}>Doctor Registration</Text>
                    <TextInput value={email} style={{ marginTop: 20, height: 45, fontSize: 15, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "#f2f8fb", paddingLeft: 20 }} placeholder={"Enter email or mobile no"} onChangeText={(email) => { setEmail(email) }} />
                    <TextInput value={password} style={{ height: 45, fontSize: 15, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "#f2f8fb", paddingLeft: 20 }} placeholder={"Enter password"} onChangeText={(password) => { setPassword(password) }} />
                    <TextInput value={age} style={{ height: 45, fontSize: 15, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "#f2f8fb", paddingLeft: 20 }} placeholder={"Enter your age"} onChangeText={(age) => { setAge(age) }} />
                    <TextInput value={designation} style={{ height: 45, fontSize: 15, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "#f2f8fb", paddingLeft: 20 }} placeholder={"Enter your designation"} onChangeText={(designation) => { setDesignation(designation) }} />
                    <TextInput value={patients} style={{ height: 45, fontSize: 15, width: width - 70, alignSelf: "center", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30, borderBottomRightRadius: 30, marginBottom: 10, backgroundColor: "#f2f8fb", paddingLeft: 20 }} placeholder={"Enter number of patients"} onChangeText={(patients) => { setPatients(patients) }} />
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DoctorLogin") }}><Text style={styles.buttontext}>Register</Text>
                        <MaterialCommunityIcons name="arrow-right-circle" size={25} color={"white"} style={{ marginRight: 5 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.footer}>Already have an account? <Text style={{ color: "#53666c", fontWeight: "bold" }} onPress={() => { navigation.navigate("DoctorLogin") }}>Sign In</Text></Text>

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
        fontSize: 40,
        marginTop: 100,
        fontWeight: "bold",
        marginBottom: 40,
        alignSelf: 'center',
        fontFamily: "Manrope"
    },
    text: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        color: "gray"
    },
    button: {
        width: width * 0.3,
        backgroundColor: "#FFA500",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30,
        alignSelf: "center"
    },
    buttontext: {
        fontSize: 15,
        marginLeft: 10,
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