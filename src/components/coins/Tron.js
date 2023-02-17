import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Troncoin from "../layout/Troncoin.png";
const Tron = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Tron Coin</h1>
          <p align="center">
            <img class="" src={Troncoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Tron Coin?</h2>
          <p>
            TRON offers a decentralised virtual machine that may run programmes
            on a global network of public nodes. There are no transaction costs
            on the network, and it can handle about 2,000 transactions per
            second.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              There are no transaction costs on the network, and it can handle
              about 2,000 transactions per second.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tron;
