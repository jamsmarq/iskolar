import * as SecureStorage from "expo-secure-store"

export const setSecureAsync = async (key: string, value: any) => {
  try {
    await SecureStorage.setItemAsync(key, value)
  } catch (error: any) {
    throw error
  }

  return true
}

export const getSecureAsync = async (key: string) => {
  try {
    const value = await SecureStorage.getItemAsync(key)
    
    return value
  } catch (error: any) {
    throw error
  }
}