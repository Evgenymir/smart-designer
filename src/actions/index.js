import api from '../assets/js/api';

const getPhonesStarted = () => ({
    type: 'GET_PHONES_STARTED',
});

const getPhonesSuccess = (data) => ({
    type: 'GET_PHONES_SUCCESS',
    payload: {
        ...data,
    },
});

const getPhonesFailure = (error) => ({
    type: 'GET_PHONES_FAILURE',
    payload: {
        error,
    },
});

export const getPhones = () => (dispatch) => {
    dispatch(getPhonesStarted());

    api.get('initState.json')
        .then((response) => {
            const { data } = response;
            dispatch(getPhonesSuccess(data));
        })
        .catch((e) => {
            dispatch(getPhonesFailure(e.message));
        });
};

export const createPhone = (data) => ({
    type: 'CREATE_PHONE',
    payload: {
        data,
    },
});

export const searchText = (text) => ({
    type: 'SEARCH_TEXT',
    payload: text,
});
