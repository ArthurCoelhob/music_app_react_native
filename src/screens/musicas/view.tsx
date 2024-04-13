import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, FlatList } from 'react-native'
import { RouteParamList } from '../../router';
import { useEffect, useState } from 'react';
import { MusicController } from '../../controller/MusicController';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


interface ViewMusicProps {
  id: string
  artista: string
  nameMusica: string
  contentMusica: string
}

type VerMusicaProps = NativeStackScreenProps<RouteParamList, 'VerMusica'>;

export const VerMusica = ({ navigation, route }: VerMusicaProps) => {
  const id = route?.params?.id
  const [content, setContent] = useState<ViewMusicProps>()

  useEffect(() => {
    MusicController.getMusic(id).then(data => {
      setContent(data)
    })
  },[])

  console.log("content =============")
  console.log(content)

  return (
    <KeyboardAwareScrollView style={styles.containerView}>
    
     <Text style={styles.viewTitle}>{content?.nameMusica}</Text>
     <Text style={styles.viewArt}>{content?.artista}</Text>
     <Text style={styles.viewContent}>{content?.contentMusica}</Text>
    </KeyboardAwareScrollView>
  )
}