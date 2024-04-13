import { View, Text, FlatList, Button, TextInputComponent } from 'react-native'
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { MusicController } from '../../controller/MusicController';
import { CardMusicItem } from '../../components/CardMusicItem';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SearchInput } from '../../components/SearchInput';
import { getAllPlaylists } from '../../model/PlaylistModel';
import { FormDataProps } from '../../controller/PlayListController';

type MusicasProps = {
  navigation: any
}

export interface MusicDoc {
  id: string
  langID: number
  url: string
  title: string
  band: string
}

export const Musicas = ({ navigation }: MusicasProps) => {
  const [listMusic, setListMusic] = useState<MusicDoc[]>([])
  const [playlists, setPlaylists] = useState<FormDataProps[]>([])
  
  useFocusEffect(useCallback(() => {
    getAllPlaylists().then(list => setPlaylists(list))
    setListMusic([])
  },[]))

  const handleSearch = (val: string) => {
    MusicController.searchMusic(val).then((data: MusicDoc[]) =>{
      setListMusic(data)
    })
  }

  return (
    <KeyboardAwareScrollView style={styles.content}>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Buscar musicas</Text>
            
            <SearchInput onpressFn={handleSearch}/>
        </View>
          
        <View style={styles.content}>
          {
            listMusic.map(item=> {
              return <CardMusicItem music={item} navigation={navigation} key={item.id} playlists={playlists}/>
            })
          }
            
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}