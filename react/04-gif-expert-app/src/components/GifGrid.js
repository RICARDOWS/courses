import React,{useState,useEffect} from 'react'
import { useFetch } from '../hooks/useFetch';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images,loading} = useFetch(category);   
    
    return (
        <>
        <h2 className='category-text'>{category}</h2>
        <div className='container'>
        {loading ? <p>Loading</p> : null}
        {
            images.map( (img) => {
                    return <GifGridItem 
                        key={img.id} 
                        { ...img }
                        />
                })
        }
        </div>
        </>
        
    )
}



export default GifGrid;