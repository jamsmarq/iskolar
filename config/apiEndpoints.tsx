import { signup } from "@/services/authService"
import "config/dotenv"

const BASE_URL = process.env.BASE_URL_DEV

export const API_ENDPOINTS = {
  test: `${BASE_URL}/test`,

  login: `${BASE_URL}/auth/login`,
  signup: `${BASE_URL}/auth/signup`,
}