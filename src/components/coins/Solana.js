import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Solanacoin from "../layout/Solanacoin.PNG";
const Solana = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Solana Coin</h1>
          <p align="center">
            <img class="" src={Solanacoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Solana Coin?</h2>
          <p>
            Solana (cryptocurrency) is a Dpos (Delegated-Proof-Of-Stake)
            consensus mechanism-based blockchain network that is quick,
            trustworthy, and scalable.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              Solana is a blockchain with a high transaction rate. It's a
              web-scale blockchain that can host apps with processing bandwidth
              comparable to the present internet.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Solana;
