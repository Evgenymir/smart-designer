import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SearchForm.scss';
import { searchText } from '../../actions';

const SearchForm = ({ dispatch }) => {
    const handleChangeInput = ({ target }) => {
        dispatch(searchText(target.value));
    };

    return (
        <div className="search-form">
            <input
                type="search"
                name="search"
                placeholder="Поиск по названию..."
                onChange={handleChangeInput}
                className="field__input"
            />
        </div>
    );
};

SearchForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(SearchForm);
