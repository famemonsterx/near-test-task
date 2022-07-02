import { WalletActionTypes } from "../../../constants/ActionTypes/wallet";
import { ConnectAction, SignInAction } from "../actions/wallet.actions";
import { WalletConnection } from "near-api-js";
import { ActionMap } from "../../../constants";

export type WalletState = {
  connect: WalletConnection | null
  wallet_name: string | null
}

type WalletPayload = {
  [WalletActionTypes.CONNECT] : ConnectAction
  [WalletActionTypes.SIGN_IN] : SignInAction
}

export type WalletActions = ActionMap<WalletPayload>[keyof ActionMap<WalletPayload>]

export const walletInitialState: WalletState = {
  connect: null,
  wallet_name: null
} as const

export const walletReducer = (state: WalletState, action: WalletActions) => {
  switch (action.type) {
    case WalletActionTypes.CONNECT:
      return { ...state, ...action.payload }
    case WalletActionTypes.SIGN_IN:
      return { ...state, wallet_name: action.payload }
    default:
      return state
  }
}