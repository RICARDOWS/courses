import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small';

const Memorize = () => {

    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true)

  return (
    <div className='container'>
        <h1>Counter: <small><Small value={counter}/></small></h1>
        <hr/>

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

export default Memorize