import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({ saludo, subtitulo }) => {

    // const objeto = {
    //     nombre: 'Juan',
    //     edad: 31,
    // }

    return (
       <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(objeto,null, 2)}</pre> */}
            <p>{subtitulo}</p>
       </>
    );
};

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimerApp.defaultProps = {
    subtitulo: 'Subtitulo default',
}

export default PrimerApp;