import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Bitcoin from "../src/components/coins/Bitcoin";
import React from "react";
import { Redirect  } from "react-router";
import Ethereum from "./components/coins/Ethereum";
import Tether from "./components/coins/Tether";
import Binancecoin from "./components/coins/Binancecoin";
import Aave from "./components/coins/Aave";
import Algorand from "./components/coins/Algorand";
import Avalanche from "./components/coins/Avalanche";
import Cardano from "./components/coins/Cardano";
import UsdCoin from "./components/coins/Usd-coin";
import Cdai from "./components/coins/Cdai";
import Chainlink from "./components/coins/Chainlink";
import Cosmos from "./components/coins/Cosmos";
import Dai from "./components/coins/Dai";
import Dogecoin from "./components/coins/Dogecoin";
import Eos from "./components/coins/Eos";
import Filecoin from "./components/coins/Filecoin";
import Iota from "./components/coins/Iota";
import Kusama from "./components/coins/Kusama";
import Litecoin from "./components/coins/Litecoin";
import Maker from "./components/coins/Maker";
import Monero from "./components/coins/Monero";
import Neo from "./components/coins/Neo";
import Okb from "./components/coins/Okb";
import Polkadot from "./components/coins/Polkadot";
import Ripple from "./components/coins/Ripple";
import Solana from "./components/coins/Solana";
import Stellar from "./components/coins/Stellar";
import Tezos from "./components/coins/Tezos";
import Tron from "./components/coins/Tron";
import Uniswap from "./components/coins/Uniswap";
import Vechain from "./components/coins/Vechain";
import BitcoinCash from "./components/coins/Bitcoin-cash";
import MaticNetwork from "./components/coins/Matic-network";
import BinanceUsd from './components/coins/Binance-usd'
import ThetaToken from "./components/coins/Theta-token";
import ThetaFuel from "./components/coins/Theta-fuel";
import CelsiusDegreeToken from "./components/coins/Celsius-degree-token";
import KlayToken from "./components/coins/klay-token";
import FtxToken from "./components/coins/Ftx-token";
import CompoundEther from "./components/coins/Compound-ether";
import PancakeswapToken from "./components/coins/Pancakeswap-token";
import CryptoComChain from "./components/coins/Crypto-com-chain";
import AmpToken from "./components/coins/Amp-token";
import TerraLuna from "./components/coins/Terra-luna";
import ShibaInu from "./components/coins/Shiba-inu";
import CompoundUsdCoin from "./components/coins/Compound-usd-coin";
import BitCoinCashSv from "./components/coins/Bitcoin-cash-sv";
import ThorChain from "./components/coins/Thorchain";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import AllCoin from "./components/coins/AllCoin";


import { Component } from "react";
const CoinGecko = require("coingecko-api");

class App extends Component {
  state = {
    coins: [],
    loading: false,
    val: true,
    selectedTab: 0,
  };
  async componentDidMount() {
    const CoinGeckoClient = new CoinGecko();
    let data3 = await CoinGeckoClient.coins.all();
    this.setState({ coins: data3.data, loading: false });
  }
  handleChange() {
    alert("hello");
    <Redirect to="/home" />;
  }
  handleHome() {
    <Redirect to="/home" />;
    alert("in home");
  }

  render() {
    return (
      <div className="App">
        <Navbar title="CryptoCurrency Stats" icon="fab fa-bitcoin" />
      
        <div className="container">
          <BrowserRouter >
            <Switch>
              <Route path="/bitcoin">
                <Bitcoin coins={this.state.coins} />
              </Route>
              <Route path="/ethereum" component={Ethereum}/>
              <Route path="/tether" component={Tether}/>
              <Route path="/binancecoin" component={Binancecoin}/>
              <Route path="/cardano" component={Cardano}/>
              <Route path="/dogecoin" component={Dogecoin}/>
              <Route path="/ripple" component={Ripple}/>
              <Route path="/polkadot" component={Polkadot}/>
              <Route path="/usd-coin" component={UsdCoin}/>
              <Route path="/uniswap" component={Uniswap}/>
              <Route path="/bitcoin-cash" component={BitcoinCash}/>
              <Route path="/litecoin" component={Litecoin}/>
              <Route path="/solana" component={Solana}/>
              <Route path="/chainlink" component={Chainlink}/>
              <Route path="/internet-computer" component={Ethereum}/>
              <Route path="/binance-usd" component={BinanceUsd}/>
              <Route path="/matic-network" component={MaticNetwork}/>
              <Route path="/theta-token" component={ThetaToken}/>
              <Route path="/stellar" component={Stellar}/>
              <Route path="/ethereum-classic" component={Ethereum}/>
              <Route path="/vechain" component={Vechain}/>
              <Route path="/wrapped-bitcoin" component={Ethereum}/>
              <Route path="/filecoin" component={Filecoin}/>
              <Route path="/tron" component={Tron}/>
              <Route path="/eos" component={Eos}/>
              <Route path="/monero" component={Monero}/>
              <Route path="/dai" component={Dai}/>
              <Route path="/kusama" component={Kusama}/>
              <Route path="/aave" component={Aave}/>
              <Route path="/cdai" component={Cdai}/>
              <Route path="/okb" component={Okb}/>
              <Route path="/neo" component={Neo}/>
              <Route path="/shiba-inu" component={ShibaInu}/>
              <Route path="/compound-ether" component={CompoundEther}/>
              <Route path="/pancakeswap-token" component={PancakeswapToken}/>
              <Route path="/cosmos" component={Cosmos}/>
              <Route path="/bitcoin-cash-sv" component={BitCoinCashSv}/>
              <Route path="/iota" component={Iota}/>
              <Route path="/theta-fuel" component={ThetaFuel}/>
              <Route path="/algorand" component={Algorand}/>
              <Route path="/crypto-com-chain" component={CryptoComChain}/>
              <Route path="/celsius-degree-token" component={CelsiusDegreeToken}/>
              <Route path="/compound-usd-coin" component={CompoundUsdCoin}/>
              <Route path="/maker" component={Maker}/>
              <Route path="/ftx-token" component={FtxToken}/>
              <Route path="/tezos" component={Tezos}/>
              <Route path="/klay-token" component={KlayToken}/>
              <Route path="/amp-token" component={AmpToken}/>
              <Route path="/huobi-token" component={Ethereum}/>
              <Route path="/avalanche-2" component={Avalanche}/>
              <Route path="/terra-luna" component={TerraLuna}/>
              <Route path="/thorchain" component={ThorChain}/>
            
            
              <Route path="/coins" component={Home} exact>
                <Home />
              </Route>
              <Route path="/" exact>
                <AllCoin
                  coins={this.state.coins}
                  loading={this.state.loading}
                />
              </Route>
            </Switch>
          </BrowserRouter>
          {/* <Coin loading={this.state.loading} coins={this.state.coins} /> */}
        </div>
      </div>
    );
  }
}

export default App;
