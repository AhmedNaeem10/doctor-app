import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorRegistration from '../screens/DoctorRegistration';
import DoctorLogin from '../screens/DoctorLogin';
import BottomNavigator from './BottomNavigator';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="DoctorRegistration"
            >
                <Stack.Screen name="DoctorRegistration" component={DoctorRegistration} />
                <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
                <Stack.Screen name="DoctorDashboard" component={BottomNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}