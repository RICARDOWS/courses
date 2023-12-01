import React from 'react'

export const ShowIncrement = React.memo(({fnIncrement}) => {
  return (
    <button className='btn btn-outline-success' onClick={() => fnIncrement(5)}>
        +1
    </button>
  )
})
