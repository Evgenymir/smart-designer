import React from 'react';
import PropTypes from 'prop-types';
import './CustomField.scss';

const CustomField = ({ input, meta, ...props }) => (
    <div className="field">
        <input {...input} {...props} className="field__input" />
        { meta.touched && meta.error && <span className="field__error">{meta.error}</span> }
    </div>
);

CustomField.propTypes = {
    input: PropTypes.objectOf(PropTypes.any).isRequired,
    meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomField;
