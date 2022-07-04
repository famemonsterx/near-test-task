import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { connect, WalletConnection } from "near-api-js";
import { connectionConfig } from "./common";
import { APP_NAME } from "./constants";
import {Buffer} from 'buffer';

Buffer.from('anything','base64');

(async function () {

  window.near = await connect(connectionConfig);

  window.wallet = new WalletConnection(window.near, APP_NAME)

})();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
