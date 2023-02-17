import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Vechaincoin from "../layout/Vechaincoin.jpeg";
const Cdai = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top ">
          <h1 align="center"> Cdai Coin</h1>
         
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What Cdai Coin?</h2>
          <p>
            It's an open-source protocol that uses the CryptoNote application
            layer as its foundation. It employs an obfuscated public ledger,
            which allows anyone to send or broadcast transactions while keeping
            the source, amount, and destination hidden from outside observers.
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

export default Cdai;
