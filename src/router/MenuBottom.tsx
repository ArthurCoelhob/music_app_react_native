import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/home'
import { Playlist } from '../screens/playlists'
import { Musica } from '../screens/musicas'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type MenuBottomParamList = {
  Home: undefined
  Playlist: undefined
  Musica: { id: string }
  CreateMusic: undefined
  StorePlayList: { id: string  } 
}

const Tab = createBottomTabNavigator<MenuBottomParamList>()

const colorActive = '#12a755'

const Mytheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colorActive,
    background: "#d6d6d6"
  }
}

export const MenuBottom = () => {
  return (
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
      
      <Tab.Screen
        listeners={({ navigation }) => ({
          focus: () => {
            navigation.setParams({ id: undefined });
          },
        })}
        name="Musica"
        component={Musica}
        options={{
          tabBarLabel: 'Ver Musica',
          tabBarActiveTintColor: colorActive,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

