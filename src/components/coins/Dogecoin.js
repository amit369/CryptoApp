import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Doge from "../layout/Dogecoin.png";
const Dogecoin = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Dogecoin</h1>
          <p align="center">
            <img class="" src={Doge} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Doge Coin ?</h2>
          <p>
            Dogecoin is a cryptocurrency that was founded as a joke by software
            programmers Billy Markus and Jackson Palmer, who wanted to mock the
            rampant cryptocurrency speculation of the time.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              IBM software developer Billy Markus and Adobe software developer
              Jackson Palmer devised Dogecoin as a prank. On December 6, 2013,
              Dogecoin was formally launched, and over a million people visited
              Dogecoin.com in the first 30 days.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dogecoin;
