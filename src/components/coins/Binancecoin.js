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
          <h1 align="center">Binancecoin</h1>
          <p align="center">
            <img class="" src={Binancecoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Binance Coin ?</h2>
          <p>
          Binance Coin (BNB) is an ERC20 token created by the popular cryptocurrency exchange Binance and released on the Ethereum platform   Tether is a contentious cryptocurrency whose tokens are issued by
            Tether Limited, which is controlled by the Bitfinex owners.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
          <p>
           The BNB token can be used to get discounts on the Binance platform, which is a cryptocurrency exchange that will eventually become a decentralised exchange for blockchain assets.
          
           The BNB coin, which is effectively the underlying gas that runs the Binance Ecosystem, has various uses.
           </p>
          </div>
        </div>
      </div>

      </React.Fragment>
    );

        
    
    
  
}

export default Tether;