import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Stellarcoin from "../layout/Stellarcoin.png";
const Stellar = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Stellar Coin</h1>
          <p align="center">
            <img class="" src={Stellarcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Stellar Coin?</h2>
          <p>
            Stellar, or Stellar Lumens, is a decentralised open source protocol
            for low-cost digital currency to fiat money transfers that enables
            cross-border transactions between any two currencies.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              A Delaware nonprofit corporation is behind the Stellar protocol.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stellar;
