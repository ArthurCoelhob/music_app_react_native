import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/home'
import { Playlist } from '../screens/playlists'
import { Musica } from '../screens/musicas'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { tokens } from '../styles/global'
import { headerCustom } from  './headerCustom'

export type MenuBottomParamList = {
  Home: undefined
  Playlist: undefined
  Musica: { id: string }
  CreateMusic: undefined
  StorePlayList: { id: string  } 
}

const Tab = createBottomTabNavigator<MenuBottomParamList>()


export const MenuBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#6F6989',
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: tokens.bgColorDark,
          position: 'absolute',
          borderTopWidth: 0,
        },
        ...headerCustom,
      }
    }>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: tokens.primaryColor,
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
          tabBarActiveTintColor: tokens.primaryColor,
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
          tabBarActiveTintColor: tokens.primaryColor,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

