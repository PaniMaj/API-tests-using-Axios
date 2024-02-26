import { checkUserProperties } from '../../functions/responseCheck.js'
import { newUserData } from '../../functions/newData.js'
import { registerNewUser } from '../../functions/postFunctions.js'

describe('User can register account', () => {
  it('User should be able to register to the site', async () => {
    const response = await registerNewUser(
      newUserData() //'email4@mail.mail', 'jakieshaslo', 'jakisusername1234'
    )

    console.log(response.data)

    checkUserProperties(response)
  })
})
