import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exemple #01"/>
            
            <div className="center">
                {state.user ? 
                    (<span className="text">{state.user.name}</span>) :
                    (<span className="text">Not logged</span>)
                }
                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Frajola'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiply7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'dividedBy25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'parseInteger'})}>Integer</button>
                </div>
                <div>
                    <input 
                        type="number"
                        className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="btn" onClick={() => dispatch({type: 'sumN', number: value})}>Sum</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
