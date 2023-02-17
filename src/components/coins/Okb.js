import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Okbcoin from "../layout/Okbcoin.png";

const Okb = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Okb Coin</h1>
          <p align="center">
            <img class="" src={Okbcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Okb Coin?</h2>
          <p>
          OKEx is a cryptocurrency exchange situated in the Seychelles that offers a trading platform for a variety of cryptocurrencies. 
            </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>Spot and derivative trading are two of the exchange's most important characteristics. It was established in 2017.   </p>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Okb;
