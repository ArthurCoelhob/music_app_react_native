import uuid from 'react-native-uuid'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from 'react-native-toast-message'

export type StoreMusics = {
  musicId: string
  musicName: string
}

export type FormDataProps = {
  id:string
  nomeLista: string
  genero?: string
  descricao?: string
  musicas?: StoreMusics[]
}

export class Playlist {
  static async register(data: FormDataProps) {
    data.id = String(uuid.v4())
    data.musicas = []

    try {
      
      const responseData = await AsyncStorage.getItem('playlists')
      const dbData = responseData ? JSON.parse(responseData) : []

      const previewData = [...dbData, data]
      const strData = JSON.stringify(previewData)

      console.log(previewData)
      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado com sucesso!',
        topOffset: 150
      });
      // await AsyncStorage.setItem('playlists', strData)
      
      return  {
        status: 'success',
        mensagem: 'ok'
      }

    } catch (error) {
        console.log(error)
        return {
          status: 'error',
          mensagem: error
        }
    }
  }

}
