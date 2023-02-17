import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Neocoin from '../layout/Neocoin.png';
const Neo = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
        <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Neo Coin</h1>
          <p align="center">
            <img class="" src={Neocoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Neo Coin?</h2>
          <p>
          Da HongFei and Erik Zhang founded Neo (previously Antshares) in 2014 as an open-source decentralised blockchain decentralised application platform.   </p>
           
          
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>
           A proof of stake decentralised Byzantine fault tolerant (dBFT) consensus mechanism amongst a number of centrally authorised nodes powers the Neo network.    
           </p>
          </div>
        </div>
      </div>
      </React.Fragment>
    );

        
    
    
  
}

export default Neo;