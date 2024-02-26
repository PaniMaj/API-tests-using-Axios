import { expect } from 'chai'

export const responseOk = (response) => {
  expect(response.status).to.equal(200)
  expect(response.statusText).to.equal('OK')
}

export const responseNotFound = (response) => {
  expect(response.status).to.equal(404)
  expect(response.statusText).to.equal('NotFound')
}

export const checkUserProperties = (response) => {
  expect(response.status).to.equal(200)
  expect(response.data.user).to.not.be.undefined

  expect(response.data.user.id).to.not.be.null
  expect(response.data.user.email).to.not.be.null
  expect(response.data.user.username).to.not.be.null
  expect(response.data.user.token).to.be.a('string').that.is.not.empty
}

export const checkArticleProperties = (response) => {
  expect(response.status).to.equal(200)
  expect(response.data.article).to.not.be.undefined

  expect(response.data.article.id).to.not.be.null
  expect(response.data.article.slug).lengthOf.above(1)
  expect(response.data.article.author).to.not.be.null
  expect(response.data.article.body).to.be.a('string').that.is.not.empty
}
