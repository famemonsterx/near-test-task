import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { WalletActions } from "./reducers/wallet.reducer";
import { commonInitialState, commonReducer, IStateType } from "./reducers";

export const WalletWrapperContext = createContext<{
  state: IStateType
  dispatch: Dispatch<WalletActions>
}>({
  state: commonInitialState,
  dispatch: () => null
})

type ComponentProps = {
  children: ReactNode
}
export const WalletWrapper = ({
  children
}: ComponentProps) => {
  const [state, dispatch] = useReducer(commonReducer, commonInitialState)
  return (
    <WalletWrapperContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletWrapperContext.Provider>
  )
}