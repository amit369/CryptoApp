import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bitcoin from "../layout/bitcoin.png";
const Bitcoin = ({ coins }) => {
  return (
    <React.Fragment>
      <div class="profile-grid my-1">
        <div class="profile-top">
          <h1 align="center">Bitcoin</h1>
          <p align="center">
            <img class="" src={bitcoin} alt="" align="center" />
          </p>
        </div>

        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">What is Bitcoin</h2>
          <p>
            Bitcoin is a decentralised digital money that may be sent directly
            from one user to another on the peer-to-peer bitcoin network.
          </p>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">History</h2>
          <div>
            <p>
              It has no central bank or single administrator. In 2008, an
              anonymous person or group invented bitcoin. Bitcoins are created
              as a result of the mining process. They can be exchanged for other
              currencies, goods, and services, but their value in the real world
              is extremely volatile. Users opt to engage in the digital currency
              for a variety of reasons, including ideals like as anarchist,
              decentralisation, and libertarianism, convenience, the ability to
              invest in the currency, and transaction anonymity. Governments
              have expressed a desire for regulation in order to tax, allow
              legal usage in trade, and for other reasons as a result of
              increased use. Bitcoin has been chastised for its usage in
              unlawful transactions, the vast amount of electricity required for
              mining (and consequently the associated carbon impact), price
              volatility, and exchange robberies. At various points, certain
              economists and journalists have referred to it as a speculative
              bubble. Although various regulatory authorities have issued
              investor alerts about bitcoin, it has also been utilised as an
              investment.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bitcoin;
