import axios from 'axios'

import { baseUrl, userEmail, userPassword } from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'
import { newArticleData } from '../../functions/newData.js'

let token

describe('Authenticated user can made an operation on articles', () => {
  before(async () => {
    token = await authenticateUser(userEmail, userPassword)
  })

  it('User should be able post an article and then change it', async () => {
    const response = await axios.post(
      `${baseUrl}/articles`,
      newArticleData(),
      headerAuthToken(token)
    )

    responseOk(response)

    const slug = response.data.article.slug

    const response2 = await axios.put(
      `${baseUrl}/articles/${slug}`,
      newArticleData(),
      headerAuthToken(token)
    )

    responseOk(response2)
  })
})
