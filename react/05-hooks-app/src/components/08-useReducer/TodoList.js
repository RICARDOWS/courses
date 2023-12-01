import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({state, handleDelete, handleComplete}) => {
  return (
    <ul className='list-group list-group-flush'>
        {
        state.map((item,i) => (
            <TodoListItem 
                key={ item.id }
                item={item}
                index={i}
                handleDelete={handleDelete} 
                handleComplete={handleComplete} 
            />
        ))
        }
    </ul>
  )
}
