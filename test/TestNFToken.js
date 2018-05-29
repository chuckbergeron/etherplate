import assertRevert from './support/assert-revert'
import range from 'lodash.range'
import Web3 from 'Web3'
var web3 = new Web3();
const nfToken = artifacts.require('NFToken')

contract('NFToken', function (accounts) {
  let contract

  const owner = accounts[0]
  const otherUser = accounts[1]

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
      var transaction = await contract.buyToken(TOKEN_TYPE, TITLE, { value: web3.toWei(0.003) } )

      // Transfer & BoughtToken events
      assert.equal(transaction.logs.length, 2)
      assert.equal(transaction.logs[1].event, 'BoughtToken')
      assert.equal(transaction.logs[1].args.tokenId.toString(), FIRST_TOKEN_ID.toString())
    })

    it('should count tokens properly', async () => {
      await contract.buyToken(TOKEN_TYPE, TITLE, { value: web3.toWei(0.003) } )

      let tokens = await contract.myTokens()
      assert.equal(tokens.length, 1)

      await contract.buyToken(TOKEN_TYPE, TITLE, { value: web3.toWei(0.003) } )
      tokens = await contract.myTokens()
      assert.equal(tokens.length, 2)
    })
  })

  describe('getToken', () => {
    it('should return the type and title of the token', async () => {
      await contract.buyToken(TOKEN_TYPE, TITLE, { value: web3.toWei(0.003) } )
      let [tokenType_, tokenTitle_] = await contract.getToken(FIRST_TOKEN_ID)

      assert.equal(TOKEN_TYPE.toString(), tokenType_.toString())
      assert.equal(TITLE, tokenTitle_)
    })
  })

  describe('setCurrentPrice', () => {
    it('sets a new price which each token will cost', async () => {
      await contract.setCurrentPrice(400000, { from: owner })
      let price = await contract.getCurrentPrice()
      assert.equal('400000', price.toString())
    })

    it('fails to set new price when called by non-owner', async () => {
      assertRevert(contract.setCurrentPrice(400, { from: otherUser }))

      let price = await contract.getCurrentPrice()
      assert.equal('3000000000000000', price.toString())
    })
  })

  describe('getCurrentPrice', () => {
    it('returns the price each token will cost', async () => {
      let price = await contract.getCurrentPrice()
      assert.equal('3000000000000000', price.toString())
    })
  })

})
