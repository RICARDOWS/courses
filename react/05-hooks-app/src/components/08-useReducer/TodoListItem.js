import React from 'react'

export const TodoListItem = ({item, index, handleDelete, handleComplete}) => {
  return (
    <li className='list-group-item d-flex align-middle justify-content-between'>

        <p 
        className={`${(item?.done) ? 'm-0 text-decoration-line-through' : 'm-0' }`} 
        role="button" onClick={() => handleComplete(item.id)}>
            {index + 1}. {item.desc}
        </p>
        
        <button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}>
            Borrar
        </button>
    </li>
  )
}
