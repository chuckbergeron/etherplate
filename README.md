# Etherplate

![etherplate red block logo](/app/images/logos/etherplate-logo--red--lg.png)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

### What is this?

This is an example project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract in a DApp. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).

Etherplate uses OpenZeppelin's fantastic community-audited contracts as a base to implement the ERC721 standard.

# Setup

### Requires NPM & Direnv

Homebrew on Mac OSX:

`brew install node npm direnv`

Apt on Linux:

`apt-get install node npm direnv`

### Install truffle globally:

`npm install truffle -g`

### Install the local NPM packages:

`npm install`

### Environment Variables

1. `cp .envrc.example .envrc`

2. Enter your own twelve random words in the .envrc.

3. Also, we'll leverage Infura's Ethereum Ropsten testnet node, so make sure to set up an account and paste your private key in your .envrc.

4. Use `direnv allow` to export the env vars into your current terminal shell.

### Ganache (CLI)

Create a directory for ganache-cli to store it's database in:

`mkdir .ganache`

### Compile the Solidity code

`truffle compile`

### Migrate the Contracts

This will deploy the contract to the network (tip: use --network=ropsten to deploy to Ethereum's Ropsten Testnet)

`truffle migrate`

# Run the Project

Make sure the truffle contracts are compiled and migrated.

In one terminal window, run the ganache-cli (local Ethereum RPC test node) with:

`./ganache.sh`

Once Ganache is running, in another terminal start the Webpack dev server.

`npm run dev`

Your server should now be running at http://127.0.0.1:8080

### truffle.js & truffle-config.js

Why is there both a truffle and truffle-config file?

* On Windows, truffle-config.js is required. You can safely delete the one you don't need (ie on Mac/Linux you can delete truffle-config.js)


## TODO:

* On successful purchase, show a message about the new purchase and how it needs to be confirmed by the network, and redirect to show the now confirming token on Purchase History or My Tokens page
* Deploy to Netlify & Ropsten, use Infura

## Nice-to-haves:

* Use a local web3 (1.0.0.beta?) instead of the current MetaMask/browser's web3 instance (which is deprecated)
* Mock out a web3 object in the integration spec and test the happy path of filling out the form and purchasing a token via enzyme
* Get `circleci` branch up and running, put a badge on the README for test runs
* Switch all .jsx to simply .js
* If the user switches their MetaMask account, need to refresh the page or stop/restart event listeners with new wallet address
* Demo how ERC721 expects you to store data (such as the JSON response when the tokenURI is requested) as per https://eips.ethereum.org/EIPS/eip-721 (For instance, OpenSea has a server which takes a contract address and tokenID, which then does a GET request to the tokenURI to pull more info (as JSON) about the token (images, name, etc), for example: https://opensea-api.herokuapp.com/events/?asset_contract_address=0x06012c8cf97bead5deae237070f9587f8e7a266d&token_id=389343)
* Fix getting duplicate entries when Ropsten returns the BoughtToken event (active subscriber listening for events in browser)

## Done:

* ~~Make into a truffle box and submit to trufflesuite~~
* ~~BUG: Purchase History only showing some purchases while My Tokens shows more ... ?~~
* ~~Show token ID / transaction ID on purchase history and Tokens#show page~~
* ~~Make sure 'Purchase History' page works~~
* ~~Implement Redux for web3 events~~
* ~~Make all React prop types required (isRequired) and provide defaultProps for those that are not~~
* ~~Convert all css to scss~~
* ~~Improve mobile styling / media query support~~

#### Gratitude

Big thanks to all of the fantastic open source developers who have made this technology actual, and to [Brendan Asselstine](https://medium.com/@asselstine) for helping kickstart my development with blockchain technologies.

#### Etherplate Wordmark

The Etherplate Wordmark is set in Sign Painter: https://typekit.com/fonts/signpainter


