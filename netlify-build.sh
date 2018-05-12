#! /bin/sh

truffle compile && \
truffle --network ropsten && \
npm run build
