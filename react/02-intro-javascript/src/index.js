//desestructuacion de objetos
const persona = { 
    nombre: 'nombre',
    edad: 41,
    clave: '1234'
};

const useContext = ({ clave, nombre, edad, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2,
            lng: 12
        }
    }
};

const {nombreClave, anios, latlng} = useContext(persona);
const {lat, lng} = latlng; //se asigna a las variables lat y lng

//****************************************************************************** */
// desestructuacion de arreglos
const personajes = ['nombre1','nombre2']
const [,p1] = personajes;

console.log(p1); //regresa el segundo elemento

const retornaArreglo = () => {
    return ['abc',123];
}

const [letras, numeros] = retornaArreglo(); //asigan las letras y numeros

//****************************************************************************** */
// Fetch con promesa

const api = 'www.thecocktaildb.com/api/json/v1/1/random.php';

const peticion = fetch(api);

peticion
    .then((resp) => resp.json() )
    .then( ({ drinks }) => {
        const urlImage = drinks[0].strDrinkThumb;
        const img = document.createElement('img');
        img.src =urlImage;
        document.body.append(img);
    })
    .catch(console.warn('Hubo un error'));
    
//******************************************************************************* */
//