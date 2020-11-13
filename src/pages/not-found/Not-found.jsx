import React from 'react';
import { Link } from 'react-router-dom';
import './Not-found.scss';

const NotFound = () => (
    <div className="not-found">
        <div className="container">
            <h1 className="title">Страница не найдена</h1>
            <Link to="/" className="button">Вернуться на главную</Link>
        </div>
    </div>
);

export default NotFound;
