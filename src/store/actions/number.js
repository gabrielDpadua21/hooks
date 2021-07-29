export function numberAdd2(dispatch) {
    dispatch({type: 'numberAdd2'})
}

export function parseInteger(dispatch) {
    dispatch({type: 'parseInteger'})
}

export function dividedBy25(dispatch) {
    dispatch({type: 'dividedBy25'})
}

export function multiply7(dispatch) {
    dispatch({type: 'multiply7'})
}

export function sumN(dispatch, number) {
    dispatch({type: 'sumN', number: number});
}