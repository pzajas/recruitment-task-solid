import AsyncStorage from '@react-native-async-storage/async-storage'
import { atom } from 'jotai'

const getStoredState = async (key: string, defaultValue: any) => {
  try {
    const storedValue = await AsyncStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch (error) {
    console.error(`Error loading state for ${key}:`, error)
    return defaultValue
  }
}

const createAsyncStorageAtom = <T>(key: string, defaultValue: T) => {
  const baseAtom = atom<Promise<T>>(getStoredState(key, defaultValue))

  const persistentAtom = atom(
    (get) => get(baseAtom),
    async (get, set, newValue: T) => {
      if (newValue === undefined || newValue === null) {
        console.warn(`Attempted to save invalid value for ${key}:`, newValue)
        return
      }

      set(baseAtom, Promise.resolve(newValue))

      try {
        await AsyncStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error(`Error saving state for ${key}:`, error)
      }
    }
  )

  return persistentAtom
}

export const favouriteColorsAtom = createAsyncStorageAtom<string[]>('favouriteColors', [])
