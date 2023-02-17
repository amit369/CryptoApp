import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Iotacoin from '../layout/Iotacoin.png';
const Iota = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
        <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center"> Iota Coin</h1>
          <p align="center">
            <img class="" src={Iotacoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Iota Coin?</h2>
          <p>
          IOTA is a cryptocurrency and open-source distributed ledger for the Internet of Things (IoT)
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>
           IOTA does not require miners to validate transactions; instead, nodes must approve two prior transactions before issuing a new transaction on the network. 
           As a result, transactions can be issued without costs, making microtransactions easier.
           </p>
          </div>
        </div>
      </div>
      </React.Fragment>
    );

        
    
    
  
}

export default Iota;