import { WalletActionTypes } from "../../../constants/ActionTypes/wallet";
import { WalletConnection } from "near-api-js";
import { Market, ViewMarket } from "../../../models";

export type ConnectAction = {
  connect: WalletConnection
}
const connect = (payload: ConnectAction) => ({ type: WalletActionTypes.CONNECT, payload })

export type SignInAction = {
  name: string
  balance: {
    available: string
    staked: string
    stateStaked: string
    total: string
  }
}
const signIn = (payload: SignInAction) => ({ type: WalletActionTypes.SIGN_IN, payload })

export type Markets = Market[]
const setMarkets = (payload: Markets) => ({ type: WalletActionTypes.SET_MARKETS, payload })

const setViewMarket = (payload: ViewMarket) => ({ type: WalletActionTypes.SET_VIEW_MARKET, payload })

export const walletActions = {
  connect, signIn, setMarkets, setViewMarket
}