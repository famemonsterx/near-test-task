import { useContext } from "react";
import { WalletWrapperContext } from "../../../wrappers";

export const useAuth = () => {
  const auth = async () => {
    // @ts-ignore
    await window.wallet.requestSignIn()
  }

  return { auth }
}