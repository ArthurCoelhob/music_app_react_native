import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/home'
import { Playlist } from '../screens/playlists'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type RootTabParamList = {
  Home: undefined
  Playlist: undefined
  // Usuario: { id: string }
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const colorActive = '#12a755'

const Mytheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colorActive,
    background: "#d6d6d6"
  }
}

export const Routes = () => {
  return (
    <>
      <NavigationContainer theme={Mytheme}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#6F6989',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarActiveTintColor: colorActive,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={20} />
              ),
            }}
          />

          <Tab.Screen
            name="Playlist"
            component={Playlist}
            options={{
              tabBarLabel: 'Playlist',
              tabBarActiveTintColor: colorActive,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={20} />
              ),
            }}
          />
          
          {/* <Tab.Screen
            listeners={({ navigation }) => ({
              focus: () => {
                navigation.setParams({ id: undefined });
              },
            })}
            name="Usuario"
            component={Usuario}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-multiple-plus" color={color} size={20} />
              ),
            }}
          /> */}
        </Tab.Navigator>

      </NavigationContainer>
    </>
  )
}

