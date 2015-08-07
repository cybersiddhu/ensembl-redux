import Immutable from 'immutable';

const initialState = Immutable.List([]);

export default function redufunc (state = initialState, action) {
    const {type} = action;

    switch (type) {
        default:
            return state;
    }
}
