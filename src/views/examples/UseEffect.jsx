import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [number2, setNumber2] = useState(0);
    const [oddEven, setOddEven] = useState(null);

    useEffect(function () {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect( () => {
        if(fatorial > 100000) document.title = "Rich!!!!"
    }, [fatorial])

    useEffect( () => {
        setOddEven(verifyOddEven(number2))
    }, [number2])


    const calcFatorial = (n) => {
        if(n < 0) return -1;
        if(n == 0) return 1;
        return calcFatorial(n - 1) * n;
    }

    const verifyOddEven = (n) => {
        return n % 2 === 0 ? 'ODD': 'EVEN';
    }

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exemple #01"/>

            <div className="center">
                <span className="text">
                    Fatorial:
                </span>
                <span className="text red">
                    {fatorial === -1 ? 'isso non ecziste' : fatorial}
                </span>
                <input 
                    type="number" 
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} 
                />
            </div>

            <SectionTitle title="Exemple #02" />

            <div className="center">
                <span className="text">
                    Even/Odd
                </span>
                <span className="text red">
                    {oddEven}
                </span>
                <input 
                    type="number" 
                    className="input"
                    value={number2}
                    onChange={e => setNumber2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
