import React from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

const menuItems = [
    {
        id: 1,
        text: 'Телефоны',
        to: '/phones',
    }, {
        id: 2,
        text: 'Добавить <span>телефон</span>',
        to: '/addPhone',
    },
];

const Menu = () => (
    <nav className="menu">
        <ul className="menu__list">
            { menuItems.map(({ id, to, text }) => (
                <li key={id} className="menu__item">
                    <NavLink
                        to={to}
                        className="menu__link"
                        activeClassName="is-active"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </li>
            )) }
        </ul>
    </nav>
);

export default Menu;
