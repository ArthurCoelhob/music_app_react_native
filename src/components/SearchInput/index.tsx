import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { tokens } from '../../styles/global';


interface SearchInputProps {
  onpressFn: (val: string) => void
}

export const SearchInput = ({onpressFn}: SearchInputProps) => {
  const [value, setvalue] = useState('')

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={setvalue}
        value={value}
      />
      <Pressable style={styles.styleBtn} onPress={() => onpressFn(value)}>
        <Icon name="search" size={26} color={tokens.primaryColor} />
      </Pressable>
    </View>
  )
}

