
import Spinner from '../layout/Spinner'
import CoinItem from '../coins/CoinItem';
const AllCoin = ({ coins, loading}) =>  {
       if(loading){
         return <Spinner/>
       }
       else {
        return (
            
                <div style={userStyle}>
                {coins.map(coin =>  (
                    <CoinItem key={coin.id} coin={coin} />
                ))}
                </div>
        
        );
                
       }
    }
const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem',
   
 
}
export default AllCoin;