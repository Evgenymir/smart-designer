import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = ({ text }) => (
    <div className="logo">
        <Link to="/" className="logo__link">{text}</Link>
    </div>
);

Logo.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Logo;
