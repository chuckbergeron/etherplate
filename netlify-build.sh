#! /bin/sh

truffle compile && \
truffle-migrate-off-chain --network rinkeby && \
npm run build
