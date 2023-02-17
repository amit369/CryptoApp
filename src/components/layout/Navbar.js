import React from 'react';
import PropTypes from 'prop-types'


const  Navbar  = ({ icon, title}) => {

        return (
            <nav className='navbar bg-dark'>
                <h2>
                    <i className={icon} />
                    {title}</h2>
                    <ul>
          <li >
            <h5><a href="/coins">Coins</a> </h5>
          </li>
          <li>
            <h5><a href="/">Home</a> </h5>
          </li>
        </ul>
                </nav>
        );
    
}
Navbar.defaultProps = {
    title : 'Crytocurrency Dashboard',
    icon : 'fab fa-github'
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}
export default Navbar;