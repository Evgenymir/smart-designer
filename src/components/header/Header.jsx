import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo.jsx';
import Menu from '../menu/Menu.jsx';

const Header = () => (
    <div className="header">
        <div className="container header__content">
            <Logo text="APP" />
            <Menu />
        </div>
    </div>
);

export default Header;
