import assertRevert from './support/assert-revert'
import BigNumber from 'bignumber.js'
import range from 'lodash.range'
const nfToken = artifacts.require('NFToken')

contract('NFToken', function (accounts) {
  var ct

  var user = accounts[0]

  var title = 'Name of the token'

  beforeEach(async function () {
    await nfToken.new().then(function (instance) {
      ct = instance
    })
  })

  describe('buyToken', () => {
    it('should fail when the title is bigger than the max size', () => {
      assertRevert(ct.buyToken(2, range(65).join('')))
    })

    it('should fail when the title is smaller than the min size', () => {
      assertRevert(ct.buyToken(2, 'a'))
    })

    it('should return 0 when no tokens', async () => {
      assert.equal((await ct.myTokens()).length, 0)
    })

    it('should emit the bought event', async () => {
      var transaction = await ct.buyToken(2, title)

      assert.equal(transaction.logs.length, 1)
      assert.equal(transaction.logs[0].event, 'BoughtToken')
      assert.equal(transaction.logs[0].args.tokenId.toString(), '0')
    })

    it('should count trophies properly!', async () => {
      await ct.buyToken(3, title)
      var trophies = await ct.myTokens()
      assert.equal(trophies.length, 1)

      await ct.buyToken(1, title)
      assert.equal((await ct.myTokens()).length, 2)
    })
  })

  describe('getTokenType', () => {
    it('should return the type of the token', async () => {
      await ct.buyToken(3, title)
      var tokenType = await ct.getTokenType(0)
      assert.equal(tokenType.toString(), '3')
    })
  })

  describe('getTokenTitle', () => {
    it('should return the title', async () => {
      await ct.buyToken(3, title)
      assert.equal((await ct.getTokenTitle(0)), title)
    })
  })

})
