import axios from 'axios'

import { baseUrl } from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'
import { newArticleData, newUserData } from '../../functions/newData.js'

import {
  postNewArticle,
  registerNewUser,
} from '../../functions/postFunctions.js'

let token
let articleSlug

describe('Authenticated user can manage favorites article', () => {
  before('New user should be able to create an article for slug', async () => {
    const registrationResponse = await registerNewUser(newUserData())
    token = registrationResponse.data.user.token

    console.log(registrationResponse.data.user.token)

    const articleResponse = await postNewArticle(newArticleData(), token)
    articleSlug = articleResponse.data.article.slug
  })

  it('User should be able to mark an article as favorite.', async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/articles/${articleSlug}/favorite`,
        null,
        headerAuthToken(token)
      )

      //responseOk(response)
    } catch (error) {
      console.error(error.response ? error.response.data : error.message)
      throw error
    }
  })
})

// już działa 💩
