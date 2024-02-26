import axios from 'axios'

import { baseUrl, userEmail, userPassword } from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'

let token
const authorName = 'Majka'
const tagName = 'dragons'

const testsData = [
  {
    itTitle: 'User should be able get artcles',
    url: `${baseUrl}/articles`,
  },
  {
    itTitle: 'User should be able get artcles by author',
    url: `${baseUrl}/articles?author=`,
    urlParam: authorName,
  },
  {
    itTitle: 'User should be able get artcles by favorite author',
    url: `${baseUrl}/articles?favorited=`,
    urlParam: authorName,
  },
  {
    itTitle: 'User should be able get artcles by tag',
    url: `${baseUrl}/articles?tag=`,
    urlParam: tagName,
  },
]

describe('Authenticated user can get various details of the articles', () => {
  beforeEach(async () => {
    token = await authenticateUser(userEmail, userPassword)
  })

  testsData.forEach(({ itTitle, url, urlParam }) => {
    it(itTitle, async () => {
      const urlWithParam = urlParam ? `${url}${urlParam}` : url
      // if urlParam = true > ${url}${urlParam} else > url

      const response = await axios.get(urlWithParam, headerAuthToken(token))

      responseOk(response)
    })
  })
})
