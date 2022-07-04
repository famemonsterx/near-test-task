import { keyStore } from "./keyStore";

export const NETWORK_ID = 'testnet'

export const connectionConfig = {
  networkId: NETWORK_ID,
  keyStore,
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
  headers: {}
}