import axios from 'axios'

import {
  baseUrl,
  user1Name,
  userEmail,
  user1Email,
  userPassword,
} from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'

let token

const testsData = [
  {
    itTitle: 'User should be able to check profile information',
    url: `${baseUrl}/profiles/${user1Name}`,
  },
  {
    itTitle: 'User should be able to follow profile of other user',
    url: `${baseUrl}/profiles/${user1Name}/follow`,
  },
  {
    itTitle: 'User should be able to unfollow profile of followed user',
    url: `${baseUrl}/profiles/${user1Name}/follow`,
  },
]

describe('Authenticated user should be able to make an operations on other users profile', () => {
  beforeEach(async () => {
    token = await authenticateUser(userEmail, userPassword)
  })

  it(testsData[0].itTitle, async () => {
    const response = await axios.get(testsData[0].url, headerAuthToken(token))

    responseOk(response)
  })

  it(testsData[1].itTitle, async () => {
    const requestBody = {
      user: {
        email: user1Email,
      },
    }
    const response = await axios.post(
      testsData[1].url,
      requestBody,
      headerAuthToken(token)
    )

    responseOk(response)
  })

  it(testsData[2].itTitle, async () => {
    const response = await axios.delete(
      testsData[2].url,
      headerAuthToken(token)
    )

    responseOk(response)
  })
})
