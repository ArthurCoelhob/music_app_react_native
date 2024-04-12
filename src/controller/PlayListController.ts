import uuid from 'react-native-uuid'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from 'react-native-toast-message'
import { getAllPlaylists, storePlaylists } from '../model/PlaylistModel'


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

export class PlaylistController {
  static async store(data: FormDataProps) {
    const id = data.id
    
    if(id) {
      return this.edit(data)
    } else {
      return this.register(data)
    }
    
  }

  static async register(data: FormDataProps) {
    try {
      data.id = String(uuid.v4())
      data.musicas = []
      
      const current = await getAllPlaylists()
      const joinData = [...current, data]
      
      await storePlaylists(joinData)

      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado com sucesso!'
      });
      
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

  static async edit(data: FormDataProps) {
    const playlists = await getAllPlaylists()
    const keyIndex = Object.keys(playlists).find(key => playlists[key].id === data.id)

    if(keyIndex) {
      playlists[keyIndex] = data

      await storePlaylists(playlists)
      
      Toast.show({
        type: 'success',
        text1: 'Cadastro atualizado com sucesso!'
      });

      return  {
        status: 'success',
        mensagem: 'ok'
      }

    
    } else {
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar cadastro, ID não encontrado!'
      });

      return {
        status: 'error',
        mensagem: 'ID não encontrado'
      }
    }


  }

  static async delete(id: string) {
    const playlists : FormDataProps[] = await getAllPlaylists()
    const keyIndex = playlists.findIndex(item => item.id === id)
    
    if(String(keyIndex)) {
      playlists.splice(keyIndex, 1)

      await storePlaylists(playlists)

      Toast.show({
        type: 'success',
        text1: 'Cadastro deletado com sucesso!'
      });

      return  {
        status: 'success',
        mensagem: 'ok'
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Erro ao deletar cadastro, ID não encontrado!'
      });

      return {
        status: 'error',
        mensagem: 'ID não encontrado'
      }
    }

  }

}
