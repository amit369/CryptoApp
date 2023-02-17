import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Daicoin from "../layout/Daicoin.png";
const Dai = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Dai Coin</h1>
          <p align="center">
            <img class="" src={Daicoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Dai Coin?</h2>
          <p>
            Dai (or DAI) is a stablecoin cryptocurrency that uses an automated
            system of smart contracts on the Ethereum blockchain to keep its
            value as close to one US dollar (USD) as feasible.
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

export default Dai;
