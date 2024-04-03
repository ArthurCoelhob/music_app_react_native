import { View, Text, FlatList } from 'react-native'


type Props = {
  navigation: any
}

export const Playlist = ({ navigation }: Props) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Playlist</Text>
    </View>
  )
}