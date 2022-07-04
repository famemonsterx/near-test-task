import React from 'react';
import { AppRouter } from "./routes";
import { WalletWrapper } from "./wrappers";

const App = () => {
  return (
    <WalletWrapper>
      <AppRouter />
    </WalletWrapper>
  )
}

export default App;
