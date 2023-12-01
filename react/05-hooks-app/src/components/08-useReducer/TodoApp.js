import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () =>{
    return JSON.parse(localStorage.getItem('state')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }];
}

export const TodoApp = () => {
    const [state, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('state',JSON.stringify(state));
    }, [state])

    const handleDelete = (stateId) =>{
        const action = {
            type: 'delete',
            payload: stateId,
        }

        dispatch(action);
    }

    const handleComplete = (stateId) => {
        dispatch({
            type:'complete', payload: stateId
        })
    }
    
    const handelAddTodo = (newTodo) => {
        dispatch({
            type:'add', payload: newTodo
        });
    }
    
    console.log(state);

  return (
    <div className='container'>
        <h1>TodoApp ({state.length})</h1>
        <hr/>

        <div className='row'>
            <div className='col-7'>
               <TodoList 
               state={state} 
               handleDelete={handleDelete} 
               handleComplete={handleComplete}/>
            </div>

            <div className='col-5'>
                <TodoAdd handleAddTodo={ handelAddTodo }/>
            </div>
        
        </div>
    </div>
  )
}
