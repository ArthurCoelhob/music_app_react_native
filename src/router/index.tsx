import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuBottom } from './MenuBottom';
import { CreateMusic } from '../screens/musicas/create';
import { Store } from '../screens/playlists/store';
import { headerCustom } from  './headerCustom'
import Header from '../components/Header';


export type RouteParamList = {
  Root: undefined
  CreateMusic: undefined
  StorePlayList: { id: string  } 
}

const Stack = createNativeStackNavigator<RouteParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={MenuBottom}
          options={{ 
            headerShown: false,
            header: () => <Header />
          }}
          
        />
        
        <Stack.Screen 
          name="CreateMusic" 
          component={CreateMusic} 
          options={{
            title: 'Criar Música',
            ...headerCustom
          }}
        />

        <Stack.Screen 
          name="StorePlayList" 
          component={Store}
          options={{
            title: 'Criar Playlists',
            ...headerCustom
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

