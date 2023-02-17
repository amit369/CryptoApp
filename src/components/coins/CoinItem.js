import React from "react";
import { BrowserRouter as Router , useHistory } from 'react-router-dom';
import "../../../src/App.css";

const CoinItem = (props) => {
  const { id} = props.coin;
  const history = useHistory();
  console.log(history);
  return (
    <div className="new-design btn-dark">
    
      
      <img
        src={props.coin.image.small}
        alt=""
        className="round-img"
        styles={{ width: "3px", height: "3px" }}
      />
      {/* <h3> <NavLink to={`/${id}`} >{id}  </NavLink></h3> */}
      <h5 ><a href={`/${id}`}> {id} </a> </h5>
      {/* <h3> <NavLink to={'/':${id}} >{id}  </NavLink></h3> */}
    
    
    
    </div>
  );
};

export default CoinItem;
