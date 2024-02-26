//import pf all nescessary data
import { baseUrl } from '../constants/config.js'
import axios from 'axios'

export const authenticateUser = async (email, password) => {
  const requestBody = {
    user: {
      email: email,
      password: password,
    },
  }

  //function execution with errors catch
  try {
    const response = await axios.post(`${baseUrl}/users/login`, requestBody)
    const accessToken = response.data.user.token
    //user.token. because there are nesting in the code - see postman request

    //console.log('Successful login >> Your Bearer Token:', accessToken) < to check purposes
    return accessToken
  } catch (error) {
    console.log('Unsuccessful login:', error.response.data)
  }
}

export const headerAuthToken = (token) => ({
  headers: {
    Authorization: `Token ${token}`,
  },
})
