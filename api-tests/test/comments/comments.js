import axios from 'axios'

import { baseUrl, user1Email, userPassword } from '../../constants/config.js'
import { authenticateUser, headerAuthToken } from '../../functions/auth.js'
import { responseOk } from '../../functions/responseCheck.js'
import { newCommentData } from '../../functions/newData.js'

let token
let slug = 'harum-iusto-et-amet-dolor-magnam'

const testsData = [
  {
    itTitle: 'User should be able to check the article comments',
    url: `${baseUrl}/articles/${slug}/comments`,
    method: 'GET',
  },
  {
    itTitle: 'User should be able to post a comment to the article',
    url: `${baseUrl}/articles/${slug}/comments`,
    method: 'POST',
    data: newCommentData(),
  },
  {
    itTitle: 'User should be able to post and then delete a posted comment',
    url: `${baseUrl}/articles/${slug}/comments`,
    method: 'DELETE',
    data: newCommentData(),
  },
]

describe('Authenticated user should be able to make an operation on the comments', () => {
  beforeEach(async () => {
    token = await authenticateUser(user1Email, userPassword)
  })

  testsData.forEach(({ itTitle, url, method, data }) => {
    it(itTitle, async () => {
      let response
      let commentNumber

      if (method === 'GET') {
        response = await axios.get(url, headerAuthToken(token))
      } else if (method === 'POST') {
        response = await axios.post(url, data, headerAuthToken(token))
      } else if (method === 'DELETE') {
        const response1 = await axios.post(url, data, headerAuthToken(token))

        commentNumber = response1.data.comment.id

        response = await axios.delete(
          `${url}/${commentNumber}`,
          headerAuthToken(token)
        )
      }

      responseOk(response)
    })
  })

  // previous code

  // it(testsData[0].itTitle, async () => {
  //   const response = await axios.get(testsData[0].url, headerAuthToken(token))

  //   responseOk(response)
  // })

  // it(testsData[1].itTitle, async () => {
  //   const response = await axios.post(
  //     testsData[1].url,
  //     newComment(),
  //     headerAuthToken(token)
  //   )

  //   responseOk(response)
  // })

  // it(testsData[2].itTitle, async () => {
  //   const response1 = await axios.post(
  //     testsData[2].url,
  //     newComment(),
  //     headerAuthToken(token)
  //   )

  //   const commentNumber = response1.data.comment.id

  //   const response2 = await axios.delete(
  //     `${testsData[2].url}/${commentNumber}`,
  //     headerAuthToken(token)
  //   )

  //   responseOk(response2)
  // })
})
