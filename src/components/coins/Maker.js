import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Makercoin from "../layout/Makercoin.jpg";
const Maker = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Maker Coin</h1>
          <p align="center">
            <img class="" src={Makercoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Maker Coin?</h2>
          <p>
          Maker (MKR) is a governance token as well as a cryptocurrency.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>
           Maker (MKR) is a digital token launched on the Ethereum platform by the Maker project, whose main goal is to develop a line of decentralised digital assets related to the value of real-world commodities such as cash, gold, and so on.
     
           </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Maker;
