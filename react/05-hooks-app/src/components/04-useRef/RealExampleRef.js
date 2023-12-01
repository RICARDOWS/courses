import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='container'>
        <h1>Real Example Ref</h1>
        <hr/>
        <button className='btn btn-outline-success mt-4' onClick={() => {setShow(!show)}}>
             Show/Hide
        </button>
        
        {(show) ? <MultipleCustomHooks/> : false}

        
    </div>
  )
}

export default RealExampleRef