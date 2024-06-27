import axios from "axios"

const LOGIN_API = "http://192.168.1.215:3000/auth/login"

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(LOGIN_API, {username, password})
    return response.data
  } catch (error: any) {
    throw error
  }
}