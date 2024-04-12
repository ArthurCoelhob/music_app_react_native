import { View, Text,  } from 'react-native'
import { styles } from './styles';
import { Button } from '../../components/Button';
import { getAllPlaylists } from '../../model/PlaylistModel';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { PlaylistItem } from '../../components/PlaylistItem';
import { FormDataProps } from '../../controller/PlayListController';


type Props = {
  navigation: any
}

export const Playlist = ({ navigation }: Props) => {
  const [playlists, setPlaylists] = useState<FormDataProps[]>([])
  const [reload, setReLoad] = useState(0)

  useFocusEffect(useCallback(() => {
    getAllPlaylists().then(data => setPlaylists(data))
  },[reload]))

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

          {playlists.map((playlist, i) => {
            return <PlaylistItem navigation={navigation} playlist={playlist} key={playlist.id} callback={() => setReLoad(reload + 1)} />
          })}
          
        </View>

        
      </View>
    </>
  )
}