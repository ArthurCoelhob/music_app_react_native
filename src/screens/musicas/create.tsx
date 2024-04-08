import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList } from 'react-native'


type CreateMusic = {
  navigation: any
}

export const CreateMusic = ({ navigation }: CreateMusic) => {
  // const id = route?.params?.id

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>CreateMusic id:</Text>
    </View>
  )
}