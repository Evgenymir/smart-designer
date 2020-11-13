import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { uniqueId } from 'lodash';

const initialState = {
    isLoad: false,
    error: null,
};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHONES_STARTED': {
            return {
                ...state,
                isLoad: true,
            };
        }
        case 'GET_PHONES_SUCCESS': {
            return {
                ...state,
                isLoad: false,
            };
        }
        case 'GET_PHONES_FAILURE': {
            return {
                ...state,
                isLoad: false,
                error: action.payload.error,
            };
        }
        default: {
            return state;
        }
    }
};

const phones = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PHONES_SUCCESS': {
            const data = action.payload;
            return {
                ...state,
                ...data.phones,
            };
        }
        case 'CREATE_PHONE': {
            const { data } = action.payload;
            const { byId, allIds } = state;
            const id = uniqueId(`${data.name}-`);
            const result = {
                [id]: {
                    id,
                    name: data.name,
                    img: data.image,
                    description: data.description,
                    parameters: [
                        {
                            key: 'Камера',
                            value: '8 мп',
                        },
                    ],
                },
            };

            return {
                ...state,
                byId: {
                    ...byId,
                    ...result,
                },
                allIds: [...allIds, id],
            };
        }
        default: {
            return state;
        }
    }
};

const searchText = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TEXT': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const rootReducers = combineReducers({
    loading,
    phones,
    searchText,
    form: formReducer,
});

export default rootReducers;
