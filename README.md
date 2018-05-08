# Etherplate

![etherplate red block logo](/app/images/logos/etherplate-logo--red--lg.png)

### What is this?

This is an example project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract in a Dapp. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).

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

### Ganache

Create a directory for Ganache to store it's database in:

`mkdir .ganache`

### Compile the Solidity code

`truffle compile`

(Sometimes this hangs for me at the end. You can cancel it and double-check the contents of your ./build/contracts/* folder)

### Migrate the Contracts

This project is using a custom truffle migration tool available on NPM:

`truffle-migrate-off-chain`

(Sometimes this hangs for me at the end. You can cancel the process and check the contents of the JSON files written in the ./networks/* folder)

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

* Figure out if we should use Redux at all for this (thinking web3 events could stash their state in a Redux store)
* JS E2E / Functional / Unit tests
* Show token ID on purchase history and Tokens#show page
* On successful purchase, show a message about the new purchase and how it needs to be confirmed
* Convert all css to scss
* Improve mobile styling / media query support
* Demo how ERC721 expects you to store data (such as the JSON response when the tokenURI is requested) as per https://eips.ethereum.org/EIPS/eip-721 (For instance, OpenSea has a server which takes a contract address and tokenID, which then does a GET request to the tokenURI to pull more info (as JSON) about the token (images, name, etc), for example: https://opensea-api.herokuapp.com/events/?asset_contract_address=0x06012c8cf97bead5deae237070f9587f8e7a266d&token_id=389343)

#### Gratitude

Big thanks to all of the fantastic open source developers who have made this technology actual, and to [Brendan Asselstine](https://medium.com/@asselstine) for helping kickstart my development with blockchain technologies.

#### Etherplate Wordmark

The Etherplate Wordmark is set in Sign Painter: https://typekit.com/fonts/signpainter


