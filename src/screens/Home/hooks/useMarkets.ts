import { useContext, useEffect } from "react";
import { walletActions, WalletWrapperContext } from "../../../wrappers";
import { MainContract } from "../../../contracts";

export const useMarkets = (contract?: MainContract) => {
  const { state, dispatch } = useContext(WalletWrapperContext)
  const { markets } = state.wallet
  const getMarkets = async () => {
    const res = await contract?.markets({})
    return res
  }

  useEffect(() => {
    if (contract) {
      getMarkets()
        // @ts-ignore
        .then(res => dispatch(walletActions.setMarkets(res)))
    }
  },[])

  return markets
}