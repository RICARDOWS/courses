import { heroes } from "../data/heroes"

export const getHeroBy = (value, target) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    const validBy = ['id','superhero','publisher','alter_ego','first_appearance','characters'];

    if(!validBy.includes(target)){
        throw new Error (`${target} no es un argumento valido`);
    }

    if(target === 'publisher' && validPublishers.includes(value)){
        return heroes.filter(hero => hero.publisher === value);
    }

    if(target === 'id'){
        return heroes.find(hero => hero.id === value);
    }

    if(target === 'superhero'){

        if(value === ''){
            return [];
        }
        value = value.toLowerCase();

        return heroes.filter(hero => hero.superhero.toLowerCase().includes(value));
    }
    
    
    throw new Error (`Los valores de ${target} no son validos`);
    
}