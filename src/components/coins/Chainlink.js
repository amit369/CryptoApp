import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chainlinkcoin from '../layout/Chainlinkcoin.png';
const Chainlink = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
        <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Chainlink Coin</h1>
          <p align="center">
            <img class="" src={Chainlinkcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Chainlink Coin?</h2>
          <p>
          Chainlink (or Link) is a cryptocurrency and decentralised oracle network that offers real-world data to blockchains. 

          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
            It's one of the most important sources of data for decentralised finance applications.
            </p>
          </div>
        </div>
      </div>
      </React.Fragment>
    );

        
    
    
  
}

export default Chainlink;