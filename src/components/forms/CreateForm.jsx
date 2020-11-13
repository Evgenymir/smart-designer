import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CustomField from '../formControls/CustomField.jsx';
import { required, descMaxLength50 } from '../../assets/js/formValidate';
import './CreateForm.scss';

const mapStateToProps = ({ form }) => {
    const { createForm } = form;

    if (createForm === undefined) {
        return {};
    }

    const hasErrors = createForm.syncErrors;

    return {
        errors: hasErrors,
    };
};

const CreateForm = ({ handleSubmit, invalid }) => (
    <form onSubmit={handleSubmit} className="create-form">
        <Field
            name="name"
            component={CustomField}
            type="text"
            validate={[required]}
            placeholder="Модель телефона"
        />
        <Field
            name="image"
            component={CustomField}
            type="text"
            validate={[required]}
            placeholder="Введите путь до картинки"
        />
        <Field
            name="description"
            component={CustomField}
            validate={[required, descMaxLength50]}
            placeholder="Небольшое описание"
        />
        <div className="create-form__button">
            <button
                type="submit"
                className="button"
                disabled={invalid}
            >
                Добавить
            </button>
        </div>
    </form>
);

CreateForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
};

const connectedForm = connect(mapStateToProps)(CreateForm);

export default reduxForm({
    form: 'createForm',
})(connectedForm);
