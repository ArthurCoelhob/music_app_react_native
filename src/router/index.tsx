import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuBottom } from './MenuBottom';
import { CreateMusic } from '../screens/musicas/create';
import Store from '../screens/playlists/store';

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
          options={{ headerShown: false }}
        />
        
        <Stack.Screen name="CreateMusic" component={CreateMusic} />

        <Stack.Screen 
          name="StorePlayList" 
          component={Store}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

