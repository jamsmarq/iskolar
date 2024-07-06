import axios from "axios"
import * as SecureStorage from "expo-secure-store"

const TEST_API = "http://192.168.1.215:3000/"
const LOGIN_API = "http://192.168.1.215:3000/auth/login"
const SIGNUP_API = "http://192.168.1.215:3000/auth/signup"

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(LOGIN_API, { username, password })
    await SecureStorage.setItemAsync("access_token", response.data.access_token)

    return response.data.message
  } catch (error: any) {
    throw error
  }
}

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(SIGNUP_API, { username, email, password })

    return response.data.message
  } catch (error: any) {
    throw error
  }
}

export const testApi = async () => {
  try {
    const response = await axios.get(TEST_API)
    return response.data
  } catch (error: any) {
    throw error
  }
}