import React, { useMemo } from 'react'
import { getHeroBy } from '../../selectors/getHeroBy'
import { HeroCard } from './HeroCard';

export const HeroList = ({value, target}) => {

    const heroes = useMemo(() => getHeroBy(value,target), [value]);

    console.log(heroes);
  return (
    <div className='row rows-cols-2 row-cols-md-3 animate__animated animate__zoomIn'>
        {
            heroes.map((hero,i) => (
                <HeroCard {...hero} key={i} />
            ))   
        }
    </div>
  )
}
