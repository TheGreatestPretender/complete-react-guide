import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state, 
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(el => el.id !== action.resultId)

            return {
                ...state,
                results: updatedArr
            }
        default: 
    }
    return state;
}
export default reducer;