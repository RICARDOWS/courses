import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(
      (num) => {
        setCounter(c => c + num);
      },
      [setCounter],
    )

    useEffect(() => {
      
    }, [increment])
    
    
  return (
    <div className='container'>
        <h1>Callback Hook: {counter}</h1>
        <ShowIncrement fnIncrement={increment}/>
    </div>
  )
}

export default CallbackHook