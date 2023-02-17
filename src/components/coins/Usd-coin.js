import Paper from "@material-ui/core/Paper";
import React from "react";

const UsdCoin = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top bg-primary p-2">
          <h1 align="center">Usd Coin</h1>
          
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Usd Coin?</h2>
          <p>USD Coin (USDC) is a digital stablecoin that is pegged to the United States dollar and runs on the Ethereum, Stellar, Algorand, and Solana blockchains
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsdCoin;
