import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-style'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='header-menu'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;