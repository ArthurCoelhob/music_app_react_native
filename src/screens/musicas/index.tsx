import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuBottomParamList } from '../../router/MenuBottom';


type MusicaProps = NativeStackScreenProps<MenuBottomParamList, 'Musica'>;

export const Musica = ({ navigation, route }: MusicaProps) => {
  const id = route?.params?.id
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Musicas id:{id}</Text>
     <Button
        title="editar Musicas"
        onPress={() => navigation.navigate('CreateMusic')}
      />
    </View>
  )
}