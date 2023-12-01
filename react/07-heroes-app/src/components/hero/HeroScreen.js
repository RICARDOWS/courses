import React, { useMemo } from 'react';
import { useParams,Navigate, useNavigate } from 'react-router-dom';
import { getHeroBy } from '../../selectors/getHeroBy';


export const HeroScreen = () => {
  const {heroId} = useParams();
  const history = useNavigate();

  const heroe = useMemo(() => getHeroBy(heroId,'id'), [heroId]) 

  if (!heroe) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    history( -1 );
  }

  const {id, superhero,publisher, alter_ego, first_appearance,characters} = heroe;

  const heroImg = `/assets/img/${id}.jpg`;

  return (
    <div className='row mt-4'>
      <div className='col-6 animate__animated animate__fadeInLeft'>
        <img src={heroImg} alt={superhero} className='img-thumbnail'/> 
      </div>

      <div className='col-6 animate__animated animate__fadeInRight'>
        <h3>{superhero}</h3>
        <ul className='list-group '>
          <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters:</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
