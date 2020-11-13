import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBlock.scss';

const ErrorBlock = ({ text }) => (
    <div className="error-block">
        <div className="error-block__text">
            Что то пошло не так, код ошибки { text }
        </div>
    </div>
);

ErrorBlock.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ErrorBlock;
