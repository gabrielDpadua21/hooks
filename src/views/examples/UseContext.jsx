import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const context = useContext(DataContext);

    const addNumber = (number) => {
        context.setState({...context.state, number: context.state.number + number})
    }

    const {number, text, setNumber, setText} = useContext(AppContext);

    useEffect(() => {
        if(number > 1240) {
            setText('Big number...')
        }
    }, [number])

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
                <div>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exemple #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text red">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number -1)}>
                        -1
                    </button>
                    <button className="btn" onClick={() => setNumber(number +1)}>
                        +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
