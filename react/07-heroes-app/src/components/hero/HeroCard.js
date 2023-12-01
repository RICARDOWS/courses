import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {

    const imagePath = `/assets/img/${id}.jpg`;
  return (  
    <div className='col g-2 d-flex align-items-stretch animate__animated animate__fadeIn'>
        <div className='card'>
        <img src={imagePath} className='card-img-top' alt={superhero}/>
            <div className="card-body">
            <h5 className='card-title'>{superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>
                    {
                        (alter_ego !== characters) ?  <p className='text-muted'><small>{characters}</small></p> : ''
                    }
                    <p className='card-text'>
                        <small className='text-muted'>{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                        Mas..
                    </Link>
            </div>
        </div>
    </div>
  )
}
