import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import File from "../layout/File.png";
const Filecoin = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> File Coin</h1>
          <p align="center">
            <img class="" src={File} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is File Coin?</h2>
          <p>
            Filecoin is a public, open-source cryptocurrency and digital payment
            system that aims to be a blockchain-based cooperative digital
            storage and data retrieval solution.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filecoin;
