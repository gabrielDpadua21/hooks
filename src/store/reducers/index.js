export function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: {name: action.payload || 'Zeuzz'} }
        case 'parseInteger':
            return { ...state, number: parseInt(state.number)}
        case 'dividedBy25':
            return { ...state, number: state.number / 25}
        case 'multiply7':
            return { ...state, number: state.number * 7}
        case 'sumN':
            return { ...state, number: parseInt(state.number) + parseInt(action.number)}
        default:
            return state;
    }
}