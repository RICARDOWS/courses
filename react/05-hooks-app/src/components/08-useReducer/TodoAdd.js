import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange,reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
    
        if(description.trim().length == 0){
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

  return (
    <>
    <h4>Agregar TODO</h4>
    <hr/>

    <form className='form-group' onSubmit={handleSubmit}>
        <input type='text' name='description' 
        placeholder='description' autoComplete='off'
        value={description}
        className='form-control' onChange={handleInputChange}/>

        <button className='btn btn-outline-primary mt-2' type='submit'>Agregar</button>
    </form>
    </>
  )
}
