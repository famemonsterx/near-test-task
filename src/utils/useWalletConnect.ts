import { WalletConnection } from "near-api-js";

export const useWalletConnect = async () => {
  // @ts-ignore
  const wallet = new WalletConnection(window.near, 'my-test-app');
  return wallet
}