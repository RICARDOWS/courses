import React from 'react'
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch'


const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

   const {loading,data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
   const {author,quote} = (data != null) ? data[0] : '';

  return (
    <div className='container'>
    <h2 className='text-info'>Breaking Bad Quotes</h2>
    <hr/>

    {
        loading ? (
            <div className='alert alert-info text-center'>
            Loading...
            </div>
        )        
        :
        (
            <blockquote className='blockquote text-end m-2'>
            <p className='mb-4'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
        )
    }
    
    <button className='btn btn-secondary' onClick={() => increment()}>Siguiente quote</button>
    
    </div>
  )
}

export default MultipleCustomHooks