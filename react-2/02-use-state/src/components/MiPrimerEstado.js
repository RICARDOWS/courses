import React, { useState } from 'react';

export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState('Example');

    const cambiarNombre = (e, nombre) => {
        setNombre(nombre);
    }


  return (
    <>  
        <h3>Componente: Mi primer Estado</h3>
        <strong>Nombre: {nombre}</strong>
        <hr/>
        <button onClick={e => cambiarNombre(e,'Franco')}>Cambiar nombre</button>
        <hr/>
        <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambiar nombre'/>
    </>
    );
}
