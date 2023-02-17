import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Uniswapcoin from "../layout/Uniswapcoin.png";
const Uniswap = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">UniSwap</h1>
          <p align="center">
            <img class="" src={Uniswapcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Uniswap Coin?</h2>
          <p>
            Uniswap is a cryptocurrency exchange technology that is
            decentralised.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              The business that created the Uniswap protocol was also called
              Uniswap. Smart contracts on the Ethereum blockchain allow for
              automated transactions between cryptocurrency tokens.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Uniswap;
