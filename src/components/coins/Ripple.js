import Paper from "@material-ui/core/Paper";
import React from "react";
import Ripplecoin from '../layout/Ripplecoin.png';
const Ripple = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
        <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Ripplecoin</h1>
          <p align="center">
            <img class="" src={Ripplecoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Ripple Coin ?</h2>
          <p>
          Ripple is a real-time gross settlement system, currency exchange network, and remittance network developed by Ripple Labs Inc., a technology company based in the United States.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>
           Ripple was founded by Jed McCaleb and built by Arthur Britto and David Schwartz, who approached Ryan Fugger, who had founded Ripple in 2005 as a financial service that provided safe payment choices to members of an online community over a global network.
               </p>         
          </div>
        </div>
      </div>
      </React.Fragment>
    );

        
    
    
  
}

export default Ripple;