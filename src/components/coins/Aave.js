import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Vechaincoin from "../layout/Vechaincoin.jpeg";
const Aave = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Aave Coin</h1>
         
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Aave Coin?</h2>
          <p>
           
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

export default Aave;
