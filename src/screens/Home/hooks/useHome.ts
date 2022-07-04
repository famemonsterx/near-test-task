import { useContext, useEffect } from "react";
import { walletActions, WalletWrapperContext } from "../../../wrappers";
import { Contract } from "near-api-js";
import { CONTRACT_URL, FrontUrls, STORAGE_TOKEN } from "../../../constants";
import { useMarkets } from "./useMarkets";
import { MainContract } from "../../../contracts";
import { useViewMarket } from "./useViewMarket";
import { useHistory } from "react-router-dom";

const getBalance = async (accountId: string) => {
  const { near } = window
  const account = await near.account(accountId)
  return await account.getAccountBalance();
}

const useCredit = () => {
  const { state, dispatch } = useContext(WalletWrapperContext)
  const { wallet } = window
  const account = wallet.account()
  const { accountId } = account

  useEffect(() => {
    getBalance(accountId)
      .then(res => {
        // @ts-ignore
        dispatch(walletActions.signIn({name: accountId, balance: res}));
      })
  }, [accountId, dispatch])

  return { name: accountId, balance: state.wallet.balance, account, dispatch }
}

export const useHome = () => {
  const history = useHistory()
  let contract: MainContract | undefined;
  if (window.wallet?.account()) {
    // @ts-ignore
    contract = new Contract(window.wallet.account(), CONTRACT_URL, {viewMethods: ['markets', 'view_market'], changeMethods: []})
  }

  const credit = useCredit()
  const markets = useMarkets(contract)
  const { handleChange, viewMarkets } = useViewMarket(contract)

  const signOut = () => {
    localStorage.removeItem(STORAGE_TOKEN)
    window.wallet.signOut()
    history.push(FrontUrls.auth)
  }



  return { ...credit, markets, handleChange, viewMarkets, signOut }
}