import { View, Text,  } from 'react-native'
import { styles } from './styles';
import { Button } from '../../components/Button';


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
            text="Criar Playlist"
            onPress={() => navigation.navigate('StorePlayList', {id: undefined })} 
            styleBtn={styles.button}
            styleTxt={styles.buttonText}
          />
        </View>
        
        <View style={styles.content}>
          <Text>content</Text>
        </View>

        
      </View>
    </>
  )
}