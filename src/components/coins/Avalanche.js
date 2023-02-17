import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Binancecoin from '../layout/Binancecoin.png';
const Tether = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        <div class="profile-grid my-1">
        <div class="profile-top bg-primary p-2">
          <h1 align="center">Avalanche coin</h1>
         
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Avalanche Coin ?</h2>
          <p>
         Avalanche is a consensus protocol for a network of unreliable machines with crash-fault or Byzantine failures. Cornell University researchers formalised the protocol in 2019, after it was anonymously presented on IPFS in May 2018.
           </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
        
          </div>
        </div>
      </div>

      </React.Fragment>
    );

        
    
    
  
}

export default Tether;