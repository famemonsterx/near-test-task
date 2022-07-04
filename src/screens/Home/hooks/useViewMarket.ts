import { MainContract } from "../../../contracts";
import { walletActions, WalletWrapperContext } from "../../../wrappers";
import { useContext } from "react";

export const useViewMarket = (contract?: MainContract) => {
  const { state, dispatch } = useContext(WalletWrapperContext)
  const getViewMarket = async (market_id: number) => {
    const res = await contract?.view_market({ market_id })
    return res
  }
  const handleChange = async (v?: number | string) => {
    const res = await getViewMarket(Number(v))
    // @ts-ignore
    dispatch(walletActions.setViewMarket(res))
  }
  return { handleChange, viewMarkets: state.wallet.viewMarkets }
}