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


## TODO:

* Convert all css to scss
* Finish implementing all ERC721 features, such as `safeTransferFrom`

#### Gratitude

Big thanks to all of the fantastic open source developers who have made this technology actual, and to [Brendan Asselstine](https://medium.com/@asselstine) for helping kickstart my development with blockchain technologies.

#### Etherplate Wordmark

The Etherplate Wordmark is set in Sign Painter: https://typekit.com/fonts/signpainter


