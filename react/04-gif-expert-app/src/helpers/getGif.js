const getGif = async(category) =>{

    if(category === ''){
        return [];
    }
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

    const resp = await fetch(url)
    const {drinks} = await resp.json();

    const info = drinks.map (e =>{
        return {
            id: e.idDrink,
            nombre: e.strDrink,
            url: e.strDrinkThumb
        }
    })

    return info;
}

export default getGif;