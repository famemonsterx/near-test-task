import { Near, WalletConnection } from "near-api-js";

export {}

declare global {
  interface Window {
    near: Near
    wallet: WalletConnection
    contract: any
  }
}