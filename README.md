# Etherplate

![etherplate red block logo](/app/images/logos/etherplate-logo--red--lg.png)

### What is this?

This is an example project showing how you can hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract in a Dapp. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).

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

### Migrate the Contracts

This project is using a custom truffle migration tool available on NPM:

`truffle-migrate-off-chain`

# Run the Project

Make sure the truffle contracts are compiled and migrated.

In one terminal window, run the ganache-cli (local Ethereum RPC test node) with:

`./ganache.sh`

Once Ganache is running, in another terminal start the Webpack dev server.

`npm run dev`

Your server should now be running at http://127.0.0.1:8080


## TODO:

* Convert all css to scss

