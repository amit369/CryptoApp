import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MaticCoin from "../layout/MaticNetwork.PNG";
const MaticNetwork = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Matic Network Coin</h1>
          <p align="center">
            <img class="" src={MaticCoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Matic Network Coin?</h2>
          <p>
          Polygon is an Ethereum-compatible blockchain network building and connecting protocol and architecture. Bringing together scalable Ethereum solutions to support a multi-chain Ethereum ecosystem.
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

export default MaticNetwork;
