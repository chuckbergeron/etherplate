#! /bin/sh
ganache-cli --db .ganache -i 1234 -e 100 -a 10 -b 3 -m "$HDWALLET_MNEMONIC"
