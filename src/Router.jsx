import React from 'react';
import MainPage from './pages/main/Main.jsx';
import Phones from './pages/phones/Phones.jsx';
import AddPhone from './pages/add-phone/Add-phone.jsx';
import NotFound from './pages/not-found/Not-found.jsx';

/* eslint-disable react/display-name */
const Router = [
    {
        path: '/',
        name: 'main',
        component: (props) => <MainPage {...props} />,
    },
    {
        path: '/Phones',
        name: 'phones',
        component: (props) => <Phones {...props} />,
    },
    {
        path: '/addPhone',
        name: 'addPhone',
        component: (props) => <AddPhone {...props} />,
    },
    {
        path: '',
        name: 'notFound',
        component: () => <NotFound />,
    },
];
/* eslint-enable */

export default Router;
