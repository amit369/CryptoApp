import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Troncoin from "../layout/Troncoin.png";
const ThorChain = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Thor Chain</h1>
        
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Thor Chain?</h2>
          
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThorChain;
