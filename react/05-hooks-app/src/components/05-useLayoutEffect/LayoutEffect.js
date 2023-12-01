import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch'


const LayoutEffect = () => {

    const {counter, increment} = useCounter(1);

   const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {quote} = (data != null) ? data[0] : '';

   const pTag = useRef();
   const [boxSize, setBoxSize] = useState({});

   useLayoutEffect(() => {
     setBoxSize(pTag.current.getBoundingClientRect())
   }, [quote])

  return (
    <div className='container'>
    <h2 className='text-info'>LayoutEffect</h2>
    <hr/>

        <blockquote className='blockquote text-end m-2 d-flex'>
        <p className='mb-4' ref={pTag}>{quote}</p>
        
        </blockquote>
        
        <pre>
            {JSON.stringify(boxSize,null, 3)}
        </pre>

        <button className='btn btn-secondary' onClick={() => increment()}>Siguiente quote</button>
    
    </div>
  )
}

export default LayoutEffect;