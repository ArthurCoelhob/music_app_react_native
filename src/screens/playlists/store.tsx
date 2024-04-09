import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteParamList } from '../../router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from '../../components/input';

type StoreProps = NativeStackScreenProps<RouteParamList, 'StorePlayList'>;

export type StoreMusics = {
  musicId: string
  musicName: string
}

type FormDataProps = {
  id:string
  nomeLista: string
  genero?: string
  descricao?: string
  musicas?: StoreMusics[]
}

const schemaRegister = yup.object({
  nomeLista: yup.string().required('O Nome da lista é obrigatório')
})

/**
 * Edita ou cria as playlists
 * @returns 
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
  }
  );

  return (
    <KeyboardAwareScrollView>
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
            errorMessage={errors?.nomeLista?.message}
            value={value ?? ''}
          />
        )}
      />
    </KeyboardAwareScrollView>
    
  );
}
