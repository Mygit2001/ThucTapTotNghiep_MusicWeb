import React from "react";
// import { handleBuyVIP } from '../../../server/app.js'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {Checkout} from '../../components';
const initialOptions = {
  "client-id":
    "Afxtyt4RQrAi5fYRuzYcLAZy_pgVZWHMzJinb33y-WhbGUMgil-mwNiPiNASaiOp1xbJ5yEnI4WgXUzJ",
  currency: "USD",
  intent: "capture",
};
const BuyAccount = () => {
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <Checkout />
      </PayPalScriptProvider>
    </div>
  );
};

export default BuyAccount;
