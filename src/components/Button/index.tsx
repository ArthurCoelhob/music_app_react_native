import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'


type InputProps = {
  onPress?: () => void
  text: string
  styleBtn?: object
  styleTxt?: object
}

export const Button = ({ onPress, text, styleBtn, styleTxt }: InputProps) => {
  const onpressFn = onPress ? onPress : () => {return}

  return (
    <Pressable style={styleBtn} onPress={onpressFn}>
      <Text style={styleTxt}>{text}</Text>
    </Pressable>
  )
}
