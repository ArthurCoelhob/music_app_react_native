import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FormDataProps, PlaylistController } from '../../controller/PlayListController'
import { Button } from '../Button'
import { styles } from './styles'
import { useFocusEffect } from '@react-navigation/native'

interface PlaylistItemProps {
  playlist: FormDataProps,
  navigation: any
  callback: () => void
}

export const PlaylistItem = ( { playlist, navigation, callback} : PlaylistItemProps ) => {
  const [showModal, setShowModal] = useState(false)

  const handlerDelete = async () => {
    const action = await PlaylistController.delete(playlist.id)
    setShowModal(false)
    if(action.status === 'success') {
      navigation.navigate('Root')
      callback()
    }
  }
  
  useFocusEffect(useCallback(() => {
    setShowModal(false)
  },[]))

  return (
    <View style={styles.wrapper}>

      {showModal && (
       <View style={styles.modal}>
          <Text style={styles.modalText}>Deseja realmente excluir esta playlist?</Text>

          <View style={{flexDirection: 'row'}}>
            <Button 
              text='Confirmar Exclusão' 
              styleBtn={styles.btnDelete} 
              styleTxt={styles.btnText} 
              onPress={handlerDelete} 
            />
            <Button 
              text='Cancelar' 
              styleBtn={styles.btnView} 
              styleTxt={styles.btnText} 
              onPress={()=> setShowModal(false)} 
            />
          </View>
        </View>
      )}

      <View style={styles.text}>
        <Text style={styles.name}>{playlist.nomeLista}</Text>
        <Text>{playlist.genero}</Text>
        <Text>{playlist.descricao}</Text>
      </View>

      <View style={styles.actions}>
        <Button 
          text='Ver Playlists' 
          styleBtn={styles.btnView} 
          styleTxt={styles.btnText} 
        />
        
        <Button 
          text='Editar' 
          styleBtn={styles.btnEdit} 
          styleTxt={styles.btnText} 
          onPress={() => navigation.navigate('StorePlayList', {id: playlist.id })} 
        />
        
        <Button 
          text='Excluir' 
          styleBtn={styles.btnDelete} 
          styleTxt={styles.btnText} 
          onPress={() => setShowModal(true)} 
        />

      </View>
    </View>
  )
}
