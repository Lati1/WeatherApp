import React from 'react';
import CurrentWeather  from '../screens/CurrentWeather';
import UpcomingWeather  from '../screens/UpcomingWeather';
import City from '../screens/City';
import { Feather } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Tabs = ({ weather }) => {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue',
                },
            }}
        >
            <Tab.Screen
            name='Current' 
            options={{
                tabBarIcon: ({ focused }) => (
                <Feather name='droplet' size={25} color={focused ? 'tomato' : 'black'} />
                )
            }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen 
            name='Upcoming' 
            options={{
                tabBarIcon: ({ focused }) => (
                <Feather name='clock' size={25} color={focused ? 'tomato' : 'black'} />
                )
            }}
            >
                {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen 
            name='City' 
            options={{
                tabBarIcon: ({ focused }) => (
                <Feather name='home' size={25} color={focused ? 'tomato' : 'black'} />
                )
            }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;