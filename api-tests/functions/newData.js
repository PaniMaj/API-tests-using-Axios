import faker from 'faker'

export const userLoginData = (userEmail, userPassword) => ({
  user: {
    email: userEmail,
    password: userPassword,
  },
})

export const newArticleData = (
  articleTitle, //articleTitle = faker.lorem.words(6)
  articleDescription,
  articleBody,
  articleTags
) => ({
  article: {
    title: articleTitle || faker.lorem.words(6), //wtedy tutaj bez fakera
    description: articleDescription || faker.lorem.sentences(),
    body: articleBody || faker.lorem.paragraphs(),
    tagList: articleTags || [
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
    ],
  },
})

export const newCommentData = (comment) => ({
  comment: {
    body: comment || faker.lorem.sentences(),
  },
})

export const newUserData = (email, password, username) => {
  const newUser = {
    user: {
      email: email || faker.internet.email(),
      password: password || faker.internet.password(),
      username: username || faker.internet.userName(),
    },
  }

  return newUser
}

//miałam wykasować komentarze, ale te mi są potrzebne ;)
// // Use cases
// const user1 = NewUser('custom@email.com', 'custompassword', 'customusername')
// console.log(user1)

// const user2 = NewUser() // Używa danych generowanych przez faker
// console.log(user2)
