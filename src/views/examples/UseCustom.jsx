import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const UseRef = (props) => {
    
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const [count, increment, decrement] = useCounter(1000);
    const response = useFetch(url);
    
    const showStates = (states) => {
        return states.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>)
    }
    
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exemple #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => increment()}>+1</button>
                    <button className="btn" onClick={() => decrement()}>-1</button>
                </div>
            </div>
            <SectionTitle title="Exemple #02"/>
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
