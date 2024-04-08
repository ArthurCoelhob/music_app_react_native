import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteParamList } from '../../router';

type StoreProps = NativeStackScreenProps<RouteParamList, 'StorePlayList'>;

/**
 * Edita ou cria as playlists
 * @returns 
 */
const Store = ({ navigation, route } : StoreProps) => {
  const id = route?.params?.id

  return (
    <View>
      <Text>store: {id}</Text>
    </View>
  )
}

export default Store