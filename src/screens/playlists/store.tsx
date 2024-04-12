import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParamList } from '../../router'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input } from '../../components/Input'
import { FormDataProps } from '../../controller/PlayListController'
import { PlaylistController } from  '../../controller/PlayListController'
import { Button } from '../../components/Button'
import  Toast  from "react-native-tiny-toast"
import { findPlaylistStorage } from '../../model/PlaylistModel'
import { styles } from './styles'

type StoreProps = NativeStackScreenProps<RouteParamList, 'StorePlayList'>;

const schemaRegister = yup.object({
  nomeLista: yup.string().required('O Nome da lista é obrigatório')
})

/**
 * Edita ou cria as playlists
 */
export const Store = ({ navigation, route } : StoreProps) => {
  const id = route?.params?.id

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Editar Playlist' : 'Criar Playlist'
    })
  }, [navigation])

  const {control, handleSubmit, reset, setValue, formState:{errors}} = useForm<FormDataProps>({
    resolver: yupResolver(schemaRegister) as any
  });

  const handlerSave = async (data: FormDataProps) => {
    const action = await PlaylistController.store(data)
    if(action.status === 'success') {
      navigation.navigate('Root')
    }
  }

  useEffect(() => {
    if(id) {
      findPlaylistStorage(id).then(listItem => {
        if(listItem) {
          Object.keys(listItem).forEach((key => {
            setValue(key as keyof FormDataProps, listItem?.[key as keyof FormDataProps])
          }
        ))
        }
      })
    }
  }, [])

  const textButton = id ? 'Salvar' : 'Cadastrar'

  return (
    <KeyboardAwareScrollView>
      <View style={styles.wrapperForm}>
        <Controller
          control={control}
          name='nomeLista'
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Nome'
              onChangeText={onChange}
              errorMessage={errors?.nomeLista?.message}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name='genero'
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Genero'
              onChangeText={onChange}
              value={value ?? ''}
            />
          )}
        />

        <Controller
          control={control}
          name='descricao'
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Descrição'
              onChangeText={onChange}
              value={value ?? ''}
            />
          )}
        />

        <Button text={textButton} onPress={handleSubmit(handlerSave)} styleBtn={styles.buttonEdit} styleTxt={styles.buttonText} />
      </View>
    </KeyboardAwareScrollView>
    
  );
}
