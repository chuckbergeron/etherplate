import assertRevert from './support/assert-revert'
import range from 'lodash.range'
const nfToken = artifacts.require('NFToken')

contract('NFToken', function (accounts) {
  let contract

  const user = accounts[0]

  const TITLE = 'Name of the token'

  const FIRST_TOKEN_ID = 1
  const SECOND_TOKEN_ID = 2
  const THIRD_TOKEN_ID = 3

  const TOKEN_TYPE = 2

  beforeEach(async function () {
    await nfToken.new().then(function (instance) {
      contract = instance
    })
  })

  describe('buyToken', () => {
    it('should fail when the title is bigger than the max size', () => {
      assertRevert(contract.buyToken(TOKEN_TYPE, range(65).join('')))
    })

    it('should fail when the title is smaller than the min size', () => {
      assertRevert(contract.buyToken(TOKEN_TYPE, 'a'))
    })

    it('should return 0 when no tokens', async () => {
      assert.equal((await contract.myTokens()).length, 0)
    })

    it('should emit the bought event', async () => {
      var transaction = await contract.buyToken(TOKEN_TYPE, TITLE)

      // Transfer & BoughtToken events
      assert.equal(transaction.logs.length, 2)
      assert.equal(transaction.logs[1].event, 'BoughtToken')
      assert.equal(transaction.logs[1].args.tokenId.toString(), FIRST_TOKEN_ID.toString())
    })

    it('should count tokens properly', async () => {
      await contract.buyToken(TOKEN_TYPE, TITLE)
      let tokens = await contract.myTokens()
      assert.equal(tokens.length, 1)

      await contract.buyToken(TOKEN_TYPE, TITLE)
      tokens = await contract.myTokens()
      assert.equal(tokens.length, 2)
    })
  })

  describe('getTokenType', () => {
    it('should return the type of the token', async () => {
      await contract.buyToken(TOKEN_TYPE, TITLE)
      let tokenType = await contract.getTokenType(FIRST_TOKEN_ID)
      assert.equal(TOKEN_TYPE.toString(), tokenType.toString())
    })
  })

  describe('getTokenTitle', () => {
    it('should return the TITLE', async () => {
      await contract.buyToken(TOKEN_TYPE, TITLE)
      assert.equal((await contract.getTokenTitle(FIRST_TOKEN_ID)), TITLE)
    })
  })

})
