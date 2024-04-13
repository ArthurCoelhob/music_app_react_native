import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, FlatList } from 'react-native'
import { RouteParamList } from '../../router';
import { useEffect, useState } from 'react';
import { findPlaylistStorage } from '../../model/PlaylistModel';
import { MusicDoc } from '../musicas';
import { styles } from './styles';
import { CardMusicItem } from '../../components/CardMusicItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type VerPlaylistProps = NativeStackScreenProps<RouteParamList, 'VerPlaylist'>;

export const VerPlaylist = ({ navigation, route }: VerPlaylistProps) => {
  const [musics, setMusics] = useState<MusicDoc[]>([])
  const id = route?.params?.id

  useEffect(() =>{
    findPlaylistStorage(id).then(data=> {
      if(data?.musicas) {
        setMusics(data.musicas)
      } 
    })
  },[])

  if(musics.length > 0) {
    return (
      <KeyboardAwareScrollView style={styles.content}>
        {
          musics.map((item, i) => {
            return <CardMusicItem music={item} navigation={navigation} key={`${item.id}_${i}`} playlists={[]}/>
          })
        }
          
      </KeyboardAwareScrollView>
    )
  } else {
    return(
      <View style={styles.nocontent}>
        <Text style={styles.nocontentText}>Nenhuma música encontrada</Text>
      </View>
    )
  }
}