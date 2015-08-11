
const initialState = {
    id: null,
    loading: false,
    result: null,
    error: null
};

export function ensemblReducer(state = initialState, action) {
    switch (action.type) {
        case 'ENSEMBL_REQUEST':
            return {
                ...state,
                id: action.id,
                loading: true
        }
        case 'ENSEMBL_SUCCESS':
            return {
                ...state,
                id: action.id,
                result: action.result,
                loading: false
        }
        case 'ENSEMBL_ERROR':
            return {
                ...state,
                id: action.id,
                error: action.error,
                loading: false
        }
        default:
            return state;
    }
}
