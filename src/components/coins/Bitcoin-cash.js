import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bitcoin from "../layout/BitcoinCash.png";
const BitcoinCash = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Bitcoin Cash</h1>
          <p align="center">
            <img class="" src={bitcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Bitcoin Cash?</h2>
          <p>
          Bitcoin Cash is a fork of the Bitcoin cryptocurrency.
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

export default BitcoinCash;
