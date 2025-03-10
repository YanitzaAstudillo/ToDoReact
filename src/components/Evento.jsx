import React, { useState } from 'react'


function Evento() {
   
    const [numero,setNumero]=useState(0)

  

    

    function sumar() {
        
        let valor = 2+2
        setNumero(valor)
        
    }
 

  return (
    <div>


       <p>valor : {numero}</p>
      <button onClick={sumar}>Sumar</button>

    </div>
  )
}

export default Evento



