#! /bin/sh

truffle compile && \
if [ "$BRANCH" == "master" ]
then
  truffle-migrate-off-chain --network ropsten
  truffle-migrate-off-chain --network rinkeby
fi
npm run build
