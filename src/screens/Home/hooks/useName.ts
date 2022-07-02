import { useContext, useEffect } from "react";
import { walletActions, WalletWrapperContext } from "../../../wrappers";
import { STORAGE_TOKEN } from "../../../constants";

export const useName = () => {
  const { state, dispatch } = useContext(WalletWrapperContext)
  useEffect(() => {
    if (!state.wallet.wallet_name) {
      console.log(window.wallet.getAccountId())
      // @ts-ignore
      dispatch(walletActions.signIn(JSON.parse(localStorage.getItem(STORAGE_TOKEN)).accountId))
    }
  }, [state.wallet.wallet_name])

  return { name: state.wallet.wallet_name }
}