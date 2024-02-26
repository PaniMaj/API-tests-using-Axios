import axios from 'axios'
import { baseUrl } from '../constants/config.js'
import { headerAuthToken } from '../functions/auth.js'

export async function registerNewUser(userData) {
  const response = await axios.post(`${baseUrl}/users`, userData, {
    validateStatus: null,
  })

  return response
}

export async function postNewArticle(newArticleData, token) {
  const response = await axios.post(
    `${baseUrl}/articles`,
    newArticleData,
    headerAuthToken(token)
  )
  return response
}

export async function postLoginUser(userLoginData) {
  const response = await axios.post(`${baseUrl}/users/login`, userLoginData, {
    validateStatus: null,
  })
  return response
}
