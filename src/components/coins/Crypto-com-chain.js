import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bitcoin from "../layout/bitcoin.png";


const CryptoComChain = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">CryptoCom Chain</h1>
          
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is CryptoCom Chain?</h2>
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

export default CryptoComChain;
