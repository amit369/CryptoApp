import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Polkadotcoin from "../layout/Polkadotcoin.jpg";
const Polkadot = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top ">
          <h1 align="center">Polkadotcoin</h1>
          <p align="center">
            <img class="" src={Polkadotcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Polkadot Coin ?</h2>
          <p>
            Polkadot is a multi-chain heterogeneous trade and translation system
            that connects private sidechains to public blockchains.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
            The protocol was created by Gavin Wood, a co-founder of Ethereum.safe
              payment choices to members of an online community over a global
              network.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Polkadot;
