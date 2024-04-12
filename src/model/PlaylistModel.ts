import AsyncStorage from "@react-native-async-storage/async-storage"
import { FormDataProps } from "../controller/PlayListController"

const STORENAME: string = 'playlists'

export const getAllPlaylists = async () => {
  const responseData = await AsyncStorage.getItem(STORENAME)
  const dbData = responseData ? JSON.parse(responseData) : []
  return dbData.filter((i: any)=>i)
}

export const storePlaylists = async (lists: FormDataProps[]) => {
  const strLists = JSON.stringify(lists)
  return await AsyncStorage.setItem(STORENAME, strLists)
}

export const findPlaylistStorage = async (id: string) => {
  const itemsStorage = await AsyncStorage.getItem(STORENAME)
  if(!itemsStorage) {
    return null
  }

  const items = JSON.parse(itemsStorage) as FormDataProps[]
  const itemFind = items.filter((item) => {
    return item.id === id
  }).pop()

  return itemFind ?? null
}

export const clearStorage = async () => {
  await AsyncStorage.clear()
}
