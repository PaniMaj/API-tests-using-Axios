import { userEmail, userPassword } from '../../constants/config.js'
import { responseOk } from '../../functions/responseCheck.js'
import { userLoginData } from '../../functions/newData.js'
import { postLoginUser } from '../../functions/postFunctions.js'

describe('User can login to own account', () => {
  it('User should be able to login with proper credentials.', async () => {
    const response = await postLoginUser(userLoginData(userEmail, userPassword))

    responseOk(response)
  })
})
