import React, { Component } from 'react';
 // import CoinItem from './CoinItem'
 import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Bitcoin from '../coins/Bitcoin';
import AllCoin from '../coins/AllCoin'
class Coin extends Component {
   
    render() {
        return (
            <div >
                {/* {this.props.coins.map(coin =>  (
                    <CoinItem key={coin.id} coin={coin} />
                ))} */}
                <BrowserRouter>
<Switch>


  <Route path='/bitcoin' component={Bitcoin} >
  </Route>
  <Route path="/" exact>
<AllCoin coins={this.props.coins}/>
    </Route>
</Switch>
</BrowserRouter>

            </div>

        );
    }
    
}
// const userStyle = {
//     display : 'grid',
//     gridTemplateColumns : 'repeat(3,1fr)',
//     gridGap : '1rem'
// }
export default Coin;