import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tethercoin from "../layout/Tether.png";
const Tether = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top ">
          <h1 align="center">Tether</h1>
          <p align="center">
            <img class="" src={Tethercoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Tether</h2>
          <p>
            Tether is a contentious cryptocurrency whose tokens are issued by
            Tether Limited, which is controlled by the Bitfinex owners.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              Tether is classified as a stablecoin. Because of the company's
              alleged participation in influencing the price of bitcoin, an
              ambiguous relationship with the Bitfinex exchange, and the
              company's inability to perform a promised audit demonstrating
              enough reserves supporting the Tether token, Tether Limited and
              the tether cryptocurrency are divisive.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tether;
