import React from 'react'

const GifGridItem = ({id,nombre, url}) => {

    
    return (
        <div className='container-card animate__animated animate__fadeInTopRight'>
            <img src={ url } alt= {nombre } className='container-card__img'/>
            <p className='container-card__text'>{nombre}</p>
        </div>
    )
}

export default GifGridItem;