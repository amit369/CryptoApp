import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Vechaincoin from '../layout/Vechaincoin.jpeg';
const Kusama = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
        <div class="col-md-20">
        <div class="profile-top">
          <h1 align="center">Kusama Coin</h1>
          <p align="center">
            <img class="" src={Vechaincoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Kusama Coin?</h2>
          <p>
          OKEx is a cryptocurrency exchange situated in the Seychelles that offers a trading platform for a variety of cryptocurrencies. 
            </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>Spot and derivative trading are two of the exchange's most important characteristics. It was established in 2017.   </p>

          </div>
        </div>
      </div>
      </React.Fragment>
    );

        
    
    
  
}

export default Kusama;