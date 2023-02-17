import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Cardanocoin from "../layout/Cardano.png";
const Cardano = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Cardanocoin</h1>
          <p align="center">
            <img class="" src={Cardanocoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Cardano Coin ?</h2>
          <p>Cardano is a publicly accessible blockchain platform.</p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              {" "}
              It's decentralised and open source, with consensus obtained by
              proof of stake. It can handle peer-to-peer transactions thanks to
              its own coin, Ada. The Cardano Foundation,
              situated in Zug, Switzerland, oversees and supervises the
              project's progress.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cardano;
