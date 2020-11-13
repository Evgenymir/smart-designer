import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import Router from './Router.jsx';
import Header from './components/header/Header.jsx';
import Preloader from './components/preloader/Preloader.jsx';
import ErrorBlock from './components/errorBlock/ErrorBlock.jsx';

const mapStateToProps = ({ loading }) => {
    const { isLoad, error } = loading;
    if (isLoad) {
        return {
            isLoad: true,
            error: error || false,
        };
    }

    return {
        isLoad: false,
        error: error || false,
    };
};

const App = ({ isLoad, error }) => {
    const location = useLocation();

    return (
        <>
            { !error && <Preloader show={isLoad} /> }
            <Header />
            <Switch location={location}>
                { Router.map(({ path, name, component }) => (
                    <Route path={path} exact render={(props) => component(props)} key={name} />
                )) }
            </Switch>
            { error && <ErrorBlock text={error} /> }
        </>
    );
};

App.propTypes = {
    isLoad: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]).isRequired,
};

export default connect(mapStateToProps)(App);
