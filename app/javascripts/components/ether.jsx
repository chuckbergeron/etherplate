import React from 'react'

export const Ether = (props) => {
  return `${web3.fromWei(props.wei, 'ether').toString()} ETH`
}
