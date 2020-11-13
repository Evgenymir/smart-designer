import React from 'react';
import PropTypes from 'prop-types';
import './Success-text.scss';

const SuccessText = ({ handleCloseButton }) => {
    return (
        <div className="success">
            <div className="success__text">Товар добавлен</div>
            <button type="button" className="button" onClick={handleCloseButton}>Закрыть</button>
        </div>
    );
};

SuccessText.propTypes = {
    handleCloseButton: PropTypes.func.isRequired,
};

export default SuccessText;
