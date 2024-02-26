import axios from 'axios'

import { baseUrl, userEmail, userPassword } from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'
import { newArticleData } from '../../functions/newData.js'

let token
let articleSlug

describe('Authenticated user can manage favorites article', () => {
  before(
    'User authentication and creation of new article for slug',
    async () => {
      token = await authenticateUser(userEmail, userPassword)

      const response = await axios.post(
        `${baseUrl}/articles`,
        newArticleData(),
        headerAuthToken(token)
      )
      articleSlug = response.data.article.slug
    }
  )

  it('User should be able to unfavorite article that was mark as fav before.', async () => {
    const response1 = await axios.post(
      `${baseUrl}/articles/${articleSlug}/favorite`,
      null, //or undefined
      headerAuthToken(token)
    )

    responseOk(response1)

    const response2 = await axios.delete(
      `${baseUrl}/articles/${articleSlug}/favorite`,
      headerAuthToken(token)
    )

    responseOk(response2)
  })
})
