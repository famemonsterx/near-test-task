import React from 'react';
import { AppRouter } from "./routes";
import { WalletWrapper } from "./wrappers";
import { useConnection } from "./wrappers/Wallet/utils/useConnection";

const App = () => {
  const worker = useConnection()
  console.log(worker)
  return (
    <WalletWrapper>
      <AppRouter />
    </WalletWrapper>
  )
}

export default App;
