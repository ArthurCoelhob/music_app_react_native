import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { MusicDoc } from '../../screens/musicas'
import { styles } from './styles'
import slugify from 'slugify'
import { Button } from '../Button'
import {Picker} from '@react-native-picker/picker';
import { FormDataProps, PlaylistController } from '../../controller/PlayListController'


interface CardMusicItemProps {
  music: MusicDoc
  navigation: any
  playlists: FormDataProps[]
}

export const CardMusicItem = ({ music, navigation, playlists }: CardMusicItemProps) => {
  const initialPicker = playlists[0]?.id ?? ''
  const [showModal, setShowModal] = useState(false)
  const [selectedPicker, setSelectedPicker] = useState(initialPicker)
  const bandslug = slugify(music.band).toLocaleLowerCase()
  const urlImage = `https://www.vagalume.com.br/${bandslug}/images/${bandslug}.jpg`

  const handlerView = () => {
    navigation.navigate('VerMusica', {id: music.id })
  }

  const handlerSave = async () => {
    const action = await PlaylistController.addMusicPlaylist(music, selectedPicker)
    
    if(action.status === 'success') {
      setTimeout(() => {
        setShowModal(false)
      }, 500);
    }
  }

  return (
    <View style={styles.content}>
      
      {showModal && playlists.length > 0 && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>Selecione a Playlist que deseja salvar a musica:</Text>

          <View style={{flexDirection: 'row'}}>
            
              <Picker
                style={styles.select}
                selectedValue={selectedPicker}
                onValueChange={(itemValue) => setSelectedPicker(itemValue)}
                itemStyle={{height: 10}}
              >
                {playlists.map(play=> <Picker.Item style={styles.selectItem} label={play.nomeLista} value={play.id} key={play.id} />)}
              </Picker>

            <Button 
              text='Confirmar' 
              styleBtn={styles.btConfirm} 
              styleTxt={styles.btnText} 
              onPress={handlerSave} 
            />
            <Button 
              text='Cancelar' 
              styleBtn={styles.btnCancel} 
              styleTxt={styles.btnText} 
              onPress={()=> setShowModal(false)} 
            />
          </View>
        </View>
      )}

      <View style={styles.image}>
        <Image
          style={styles.logo}
          source={{
            uri: urlImage,
          }}
        />
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>{music.title}</Text>
        <Text>{music.band}</Text>
        
        <View style={styles.actions}>
          <Button
            text='Ver Musica'
            styleBtn={styles.btnView}
            styleTxt={styles.btnText}
            onPress={handlerView}
          />
          {playlists.length > 0 && (
            <>
            <Button
              text='Salvar'
              styleBtn={styles.btnSave}
              styleTxt={styles.btnText}
              onPress={()=> setShowModal(true)} 
            />
            </>
          )}
        </View>
      </View>
    </View>
  )
}

