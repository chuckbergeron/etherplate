#! /bin/sh
mkdir -p .ganache
ganache-cli \
  --db .ganache \
  -l 8000038 \
  -i 1234 \
  -e 10000 \
  -a 10 \
  -g 100000000000 \
  -u 0 \
  -m "$HDWALLET_MNEMONIC"
