import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { initialState, reducer } from '../../store/config';
import { login, numberAdd2, parseInteger, multiply7, dividedBy25, sumN } from '../../store/actions';

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
                    <button className="btn" onClick={() => login(dispatch, 'Zeuss')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => multiply7(dispatch)}>x7</button>
                    <button className="btn" onClick={() => dividedBy25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => parseInteger(dispatch)}>Integer</button>
                </div>
                <div>
                    <input 
                        type="number"
                        className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="btn" onClick={() => sumN(dispatch, value)}>Sum</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
