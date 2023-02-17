import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ShibaInucoin from "../layout/ShibaInuCoin.png";
const ShibaInu = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top ">
          <h1 align="center"> ShibaInu Coin</h1>
          <p align="center">
            <img class="" src={ShibaInucoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What ShibaInu Coin?</h2>
          <p>
          Shiba Inu (code: SHIB), commonly known as Shiba Token, is a decentralised cryptocurrency created by an unknown person identified only as "Ryoshi" in August 2020.
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

export default ShibaInu;
