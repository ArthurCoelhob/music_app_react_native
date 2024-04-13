import { Button, Image, Text, View } from 'react-native'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import logo from '../../assets/vgl-logo.png'


type Props = {
  navigation: any
}

export const Home = ({ navigation }: Props) => {

  return (
    <KeyboardAwareScrollView style={styles.container}>

      <View style={styles.wrapperLogo}>
        <Image 
          source={require('../../assets/vgl-logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.welcome}>Seja Bem Vindo!</Text>
      </View>
    
      <View style={styles.resume}>
        <Text style={styles.resumeText}>
          Gerencie Playlists e salve suas músicas favoritas.
          Busque músicas e adicione na playlist desejada!
        </Text>
      </View>
     
    </KeyboardAwareScrollView>
  )
}