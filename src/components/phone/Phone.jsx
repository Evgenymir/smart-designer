import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import './Phone.scss';

const Phone = ({
    name, img, description, parameters,
}) => (
    <div className="phone">
        <div className="phone__img">
            <img src={img} alt={name} />
        </div>
        <div className="phone__name">{name}</div>
        <div className="phone__desc">{description}</div>
        <div className="phone__parameters">
            { parameters.map(({ key, value }) => (
                <div className="phone__parameters-item" key={uniqueId('param-')}>
                    <span>{key}</span>
                    <span>{value}</span>
                </div>
            )) }
        </div>
    </div>
);

Phone.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    parameters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Phone;
