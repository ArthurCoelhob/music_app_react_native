import { View, Text, FlatList, Button } from 'react-native'


type Props = {
  navigation: any
}

export const Home = ({ navigation }: Props) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
     <Button
        title="Ver playlists"
        onPress={() => navigation.navigate('Playlist')}
      />
     
    </View>
  )
}