const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {
        console.log(`Faltan ${iteraciones} iteraciones`);
    }

    return `${iteraciones} realizadas`;
}

export default procesoPesado;