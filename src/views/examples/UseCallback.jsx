import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './useCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const increment = useCallback((delta) => {
        setCount(curr => curr + delta);
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <SectionTitle title="Exemple #01" />

            <div className="center">
               <span className="text">{count}</span>
               <UseCallbackButtons increment={increment} />
            </div>
        </div>
    )
}

export default UseCallback
