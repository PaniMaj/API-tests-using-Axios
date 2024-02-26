import { user2Email, userPassword } from '../../constants/config.js'
import { authenticateUser } from '../../functions/auth.js'
import { checkArticleProperties } from '../../functions/responseCheck.js'
import { newArticleData } from '../../functions/newData.js'
import { postNewArticle } from '../../functions/postFunctions.js'

let token

describe('Authenticated user can made an operation on articles', () => {
  before(async () => {
    token = await authenticateUser(user2Email, userPassword)
  })

  it('User should be able post an article', async () => {
    const response = await postNewArticle(newArticleData(), token)

    // console.log(response.data)
    // console.log(response.status)

    // tu powinnam zrobić GET aby sprawdzić czy faktycznie dane się utowrzyły

    checkArticleProperties(response)
  })
})
