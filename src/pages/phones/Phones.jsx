import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Phones.scss';
import { connect } from 'react-redux';
import Phone from '../../components/phone/Phone.jsx';
import SearchForm from '../../components/forms/SearchForm.jsx';
import scrollPageTop from '../../assets/js/scrollPageTop';
import filteredPhones from '../../assets/js/filteredPhones';

const mapStateToProps = ({ phones, searchText }) => {
    const { byId, allIds } = phones;

    if (!allIds) {
        return {};
    }

    const allPhones = allIds.map((item) => byId[item]);

    return {
        phones: searchText.length > 0 ? filteredPhones(phones, searchText) : allPhones,
    };
};

const Phones = ({ phones }) => {
    useEffect(() => {
        scrollPageTop();
    }, []);

    return (
        <div className="phones">
            <div className="container">
                <h1 className="phones__title title">
                    Доступные телефоны
                </h1>
                <SearchForm />
                <div className="phones__list">
                    { phones.length === 0 ? (
                        <div className="phones__not-result">
                            Ничего не найдено!
                        </div>
                    ) : (
                        phones.map(({
                            id, name, img, description, parameters,
                        }) => (
                            <Phone
                                key={id}
                                name={name}
                                img={img}
                                description={description}
                                parameters={parameters}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

Phones.defaultProps = {
    phones: [],
};

Phones.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        parameters: PropTypes.arrayOf(PropTypes.object),
    })),
};

export default connect(mapStateToProps)(Phones);
