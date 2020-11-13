import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Add-phone.scss';
import { connect } from 'react-redux';
import CreateForm from '../../components/forms/CreateForm.jsx';
import { createPhone } from '../../actions';
import SuccessText from '../../components/forms/Success-text.jsx';

const AddPhone = ({ dispatch }) => {
    const [successText, setSuccessText] = useState(false);
    const handleSubmitForm = (values) => {
        // При отправке данных на сервер будет реализована обработка ответ сервера.
        // На данный момент реализовано просто отправка данных в основное хранилище redux
        dispatch(createPhone(values));
        setSuccessText(true);
    };

    const handleCloseButton = (e) => {
        e.preventDefault();
        setSuccessText(false);
    };

    return (
        <div className="add-phone">
            <div className="container">
                <h1 className="add-phone__title title">
                    Добавьте телефон
                </h1>
                { successText ? (
                    <SuccessText handleCloseButton={handleCloseButton} />
                ) : (
                    <CreateForm onSubmit={handleSubmitForm} />
                ) }
            </div>
        </div>
    );
};

AddPhone.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(AddPhone);
