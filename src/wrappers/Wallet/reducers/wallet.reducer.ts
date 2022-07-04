import { WalletActionTypes } from "../../../constants/ActionTypes/wallet";
import { ConnectAction, Markets, SignInAction } from "../actions/wallet.actions";
import { WalletConnection } from "near-api-js";
import { ActionMap } from "../../../constants";
import { ViewMarket } from "../../../models";

export type WalletState = {
  connect: WalletConnection | null
  name: string | null
  balance: {
    available: string
    staked: string
    stateStaked: string
    total: string
  } | {}
  markets: Markets | null
  viewMarkets: ViewMarket | null
}

type WalletPayload = {
  [WalletActionTypes.CONNECT] : ConnectAction
  [WalletActionTypes.SIGN_IN] : SignInAction
  [WalletActionTypes.SET_MARKETS] : Markets
  [WalletActionTypes.SET_VIEW_MARKET] : ViewMarket
}

export type WalletActions = ActionMap<WalletPayload>[keyof ActionMap<WalletPayload>]

export const walletInitialState: WalletState = {
  connect: null,
  name: null,
  balance: {},
  markets: null,
  viewMarkets: null
} as const

export const walletReducer = (state: WalletState, action: WalletActions) => {
  switch (action.type) {
    case WalletActionTypes.CONNECT:
      return { ...state, ...action.payload }
    case WalletActionTypes.SIGN_IN:
      return { ...state, ...action.payload }
    case WalletActionTypes.SET_MARKETS:
      return { ...state, markets: action.payload }
    case WalletActionTypes.SET_VIEW_MARKET: {
      return { ...state, viewMarkets: action.payload}
    }
    default:
      return state
  }
}