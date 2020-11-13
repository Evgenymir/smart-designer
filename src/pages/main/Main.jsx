import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => (
    <div className="main">
        <h1 className="main__title title">
            Тестовое приложение
        </h1>
        <div className="main__buttons">
            <Link to="/phones" className="button main__button">Телефоны</Link>
            <Link to="/addPhone" className="button main__button">Добавить телефон</Link>
        </div>
    </div>
);

export default Main;
