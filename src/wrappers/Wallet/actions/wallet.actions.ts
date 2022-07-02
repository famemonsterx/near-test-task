import { WalletActionTypes } from "../../../constants/ActionTypes/wallet";
import { WalletConnection } from "near-api-js";

export type ConnectAction = {
  connect: WalletConnection
}
const connect = (payload: ConnectAction) => ({ type: WalletActionTypes.CONNECT, payload })

export type SignInAction = string
const signIn = (payload: SignInAction) => ({ type: WalletActionTypes.SIGN_IN, payload })

export const walletActions = {
  connect, signIn
}