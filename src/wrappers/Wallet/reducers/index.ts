import { WalletActions, walletInitialState, walletReducer, WalletState } from "./wallet.reducer";

export type IStateType = {
  wallet: WalletState
}

export const commonInitialState: IStateType = {
  wallet: walletInitialState
}

export const commonReducer = ({ wallet }: IStateType, action: WalletActions) => ({
  wallet: walletReducer(wallet, action)
})