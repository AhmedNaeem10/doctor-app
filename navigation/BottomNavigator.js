import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoctorHome from '../screens/DoctorHome';
import DoctorAppointment from '../screens/DoctorAppointment';
import DoctorNote from '../screens/DoctorNote';
import DoctorProfile from '../screens/DoctorProfile';
import DoctorAdd from '../screens/DoctorAdd';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  
  return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'DoctorHome') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
                  return <MaterialCommunityIcons size={25} name={iconName} color={"#003B73"}  />
              } else if (route.name === 'DoctorAppointment') {
                iconName = focused ? 'message-text' : 'message-text-outline';
                return <MaterialCommunityIcons size={25} name={iconName} color={"#003B73"}  />
              } else if (route.name === 'DoctorProfile') {
                iconName = focused ? 'md-person-circle' : 'md-person-circle-outline';
                return <Ionicons size={25} name={iconName} color={"#003B73"}  />
              } else if (route.name === 'DoctorNote') {
                iconName = focused ? 'note-text' : 'note-text-outline';
                return <MaterialCommunityIcons size={25} name={iconName} color={"#003B73"}  />
              } else if (route.name === 'DoctorAdd') {
                iconName = focused ? 'plus' : 'plus';
                return(
                  <View style={{width:50, height: 50, backgroundColor: "#003B73", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50}}>
                      <Octicons size={25} name={iconName} color={"white"}  />
                  </View>
                );
              }
              ;
            },
            tabBarActiveTintColor: '#0C2D48',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{height: 60, paddingTop: 10}
          })}
        >
           <Tab.Screen name="DoctorHome" component={DoctorHome} />
           <Tab.Screen name="DoctorAppointment" component={DoctorAppointment} />
           <Tab.Screen name="DoctorAdd" component={DoctorAdd} />
           <Tab.Screen name="DoctorNote" component={DoctorNote} />
           <Tab.Screen name="DoctorProfile" component={DoctorProfile} />
           
           
         </Tab.Navigator>
  );
}