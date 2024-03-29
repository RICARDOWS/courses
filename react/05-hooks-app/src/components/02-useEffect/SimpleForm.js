import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',

    })

    const {name, email} = formState;

    useEffect( () => {

    },[formState]);
    
    useEffect( () => {

    },[email]);

    const handleInputChange = ({target}) => {
        setFormState({...formState, [target.name ]: target.value});
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr/>

            <div className='form-group'>
                <input 
                type='text' 
                name='name' 
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input 
                type='text' 
                name='email' 
                className='form-control'
                placeholder='email@email.com'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
                />
            </div>

            {(name === '123') ? <Message/> : null}
        </>
    )
}

export default SimpleForm;