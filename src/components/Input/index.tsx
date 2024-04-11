import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'


type InputProps = {
  placeholder: string
  onChangeText: () => void
  errorMessage?: string
  value: string
}

export const Input = ({ onChangeText, value, errorMessage, placeholder }: InputProps) => {

  return (
    <View style={styles.contentInput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
}
