import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [value])

    useEffect(() => {
        count.current = count.current + 1;
        myInput1.current.focus();
    }, [value2])

    const merge = (value1, value2) => {
        return [...value1].map((letter1, index) => {
            return `${letter1}${value2[index] || ""}`
        }).join("");
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exemple #01"/>
            
            <div className="center">
                <span className="text">Valor: </span>
                <span className="text">{merge(value, value2)}</span>
                <div>
                    <span className="text">Render: [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input"
                    value={value}
                    ref={myInput1}
                    onChange={(e) => setValue(e.target.value)} 
                />
            </div>

            <SectionTitle title="Exemple #02"/>
            <div className="center">
                <input 
                    type="text"
                    className="input"
                    value={value2}
                    ref={myInput2}
                    onChange={(e) => setValue2(e.target.value)} 
                />
            </div>
        </div>
    )
}

export default UseRef
