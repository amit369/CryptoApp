import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tezoscoin from "../layout/Tezoscoin.png";
const Tezos = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Tezos Coin</h1>
          <p align="center">
            <img class="" src={Tezoscoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Tezos Coin?</h2>
          <p>
            Tezos is a decentralised, open-source blockchain network that may be
            used to execute peer-to-peer transactions and as a platform for
            smart contract deployment.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              The Tezos network uses a liquid proof-of-stake approach to obtain
              consensus. Tezos has an on-chain governance approach that allows
              the protocol to update itself when community members vote in
              favour of upgrade proposals. 
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tezos;
