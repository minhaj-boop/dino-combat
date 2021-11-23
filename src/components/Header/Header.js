import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;