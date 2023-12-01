import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'

const MemoHook = () => {

    const {counter, increment} = useCounter(10000);
    const [show, setShow] = useState(true)


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className='container'>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{counter}</small></h3>
        <hr/>

        <p>{memoProcesoPesado}</p>

        <button className='btn btn-outline-primary' onClick={() => increment()}>
            +1
        </button>

        <button className='btn btn-outline-success ms-3' onClick={()=>{
            setShow(!show);
        }}>
            Show/hide: {JSON.stringify(show)}
        </button>
    </div>
  )
}

export default MemoHook