import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuBottom } from './MenuBottom';
import { VerMusica } from '../screens/musicas/view';
import { Store } from '../screens/playlists/store';
import { headerCustom } from  './headerCustom'
import { VerPlaylist } from '../screens/playlists/view';


export type RouteParamList = {
  Root: undefined
  VerMusica: { id: string  } 
  StorePlayList: { id: string  } 
  VerPlaylist: { id: string  } 
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
          }}
        />
        
        <Stack.Screen 
          name="VerMusica" 
          component={VerMusica} 
          options={{
            title: 'Musica',
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
        
        <Stack.Screen 
          name="VerPlaylist" 
          component={VerPlaylist}
          options={{
            title: 'Playlist',
            ...headerCustom
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

