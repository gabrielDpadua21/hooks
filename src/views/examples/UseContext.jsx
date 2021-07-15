import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';

const UseContext = (props) => {

    const context = useContext(DataContext);

    const setNumber = (number) => {
        context.setState({...context.state, number: context.state.number + number})
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exemple #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text red">{context.state.number}</span>
                <button className="btn" onClick={() => setNumber(+1)}>+1</button>
                <button className="btn" onClick={() => setNumber(+1)}>-1</button>
            </div>
        </div>
    )
}

export default UseContext
