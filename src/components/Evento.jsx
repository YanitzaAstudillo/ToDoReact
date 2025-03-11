import React, { useEffect, useState } from 'react'

function Evento() {
  const [numero,setNumero]=useState(0);
    const contar = 0

    useEffect(()=>{
        setNumero(contar)
        
    },[])
   
  return (
    <div>


      <p>valor : {numero}</p>

      <button onClick={Evento}>Solicitudes</button>
      
      <br />
      <br />
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
      <label className="form-check-label" htmlFor="flexCheckChecked">Cumple con los requisitos</label>
      <br />
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">Requisitos incompletos</label>

    </div>
  )
}

export default Evento



