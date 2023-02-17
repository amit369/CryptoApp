import Paper from "@material-ui/core/Paper";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import bitcoin from '../layout/bitcoin.png';
const Avalanche = ({ coins}) => {
    
    
      
    return ( 
      <React.Fragment>
        
    <Grid container spacing={0} className="sideGutter">
      <Grid item x={12} >
         <Typography type="display2" variant="h5" gutterBottom>
           <font color="black">
               <p>
         Avalanche is a consensus protocol for a network of unreliable machines with crash-fault or Byzantine failures. Cornell University researchers formalised the protocol in 2019, after it was anonymously presented on IPFS in May 2018.
           </p>
            
           </font>
         </Typography>
      </Grid>
    </Grid>
      </React.Fragment>
    );
   
        
    
    
  
}

export default Avalanche;