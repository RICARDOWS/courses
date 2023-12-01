import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
      console.log('Componente montado');

      const mouseMove = (e) => {
        setCoords({x: e.x, y: e.y});
      }

      window.addEventListener('mousemove', mouseMove);
    
      return () => {
        window.removeEventListener('mousemove', mouseMove);
        console.log('Componente desmontado');
      }
    }, [])
    

    return (
        <div>
          <h3>Message de use effect</h3>
          <p>
            x: {x} - y: {y}
          </p>
        </div>
    )
}

export default Message