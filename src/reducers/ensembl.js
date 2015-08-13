
const initialState = {
    id: null,
    loading: true,
    response: null,
    error: null
};

export function ensemblReducer(state = initialState, action) {
    switch (action.type) {
        case 'ENSEMBL_REQUEST':
            return {
                ...state,
                id: action.id,
                loading: true
        };
        case 'ENSEMBL_SUCCESS':
            return {
                ...state,
                id: action.id,
                error: null,
                response: action.response,
                loading: false
        };
        case 'ENSEMBL_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.error.error,
                response: null,
                loading: false
        };
        default:
            return state;
    }
}
