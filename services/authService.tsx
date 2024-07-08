import { API_ENDPOINTS } from "@/config/apiEndpoints"
import axios from "axios"
import * as SecureStorage from "expo-secure-store"

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(API_ENDPOINTS.login, { username, password })
    await SecureStorage.setItemAsync("access_token", response.data.access_token)

    return response.data.message
  } catch (error: any) {
    throw error
  }
}

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(API_ENDPOINTS.signup, { username, email, password })

    return response.data.message
  } catch (error: any) {
    throw error
  }
}

export const testApi = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.test)
    return response.data
  } catch (error: any) {
    throw error
  }
}