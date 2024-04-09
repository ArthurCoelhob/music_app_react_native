import { View, Text, FlatList, Button } from 'react-native'
import { styles } from './styles';


type Props = {
  navigation: any
}

export const Playlist = ({ navigation }: Props) => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Gerencie suas Playlists</Text>
          <Button
            title="Criar Playlist"
            onPress={() => navigation.navigate('StorePlayList', {id: undefined })}
          />
        </View>
        
        <View style={styles.content}>
          <Text>content</Text>
        </View>

        
      </View>
    </>
  )
}