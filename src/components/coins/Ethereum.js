import React from "react";
import Ethereumcoin from '../layout/Ethereum.png';
const Bitcoin = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
                   <div class="profile-grid my-1">
     
     <div class="profile-top ">
     <h1 align="center">Ethereum</h1> 
     <p align="center">
       <img
         class=""
         src={Ethereumcoin}
         alt=""
         align="center"
       />
       </p>
       
     </div>

     
     <div class="profile-about bg-light p-2">
       <h2 class="text-primary">What is Ethereum</h2>
       <p>
       Ethereum is an open-source, decentralised blockchain that allows users to build smart contracts. The platform's native cryptocurrency is Ether (ETH or ). 
       </p>
      

      
     </div>


     <div class="profile-exp bg-white p-2">
       <h2 class="text-primary">History</h2>
       <div>
       <p>
       It is the second-largest cryptocurrency in terms of market capitalization behind Bitcoin. The Ethereum blockchain is the most widely utilised. 
       Vitalik Buterin, a programmer, proposed Ethereum in 2013. After being crowdfunded in 2014, the network went live on July 30, 2015, with an initial supply of 72 million tokens. Developers can utilise the platform to create and run decentralised applications that users can engage with.
       NFTs, or non-interchangeable tokens linked to digital works of art or other real-world goods and sold as unique digital property, are another feature of Ethereum. Many other cryptocurrencies use the Ethereum blockchain to operate as ERC-20 tokens and have used the platform for initial coin offerings.
           
                </p>
       </div>
      
     </div>

     

 

   </div>

      </React.Fragment>
    );
    
       
      
}

export default Bitcoin;