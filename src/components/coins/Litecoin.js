import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lite from "../layout/Lite.png";
const Litecoin = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Lite Coin</h1>
          <p align="center">
            <img class="" src={Lite} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Lite Coin?</h2>
          <p>
            Litecoin (LTC) is a peer-to-peer cryptocurrency and open-source
            software project that was launched in 2011.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              On October 7, 2011, Charlie Lee, a Google employee who eventually
              became Engineering Director at Coinbase, launched Litecoin via an
              open-source client on GitHub. On October 13, 2011, the Litecoin
              network went operational.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Litecoin;
