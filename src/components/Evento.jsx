import React, { useEffect, useState } from 'react'

import llamados from '../services/llamados';



 function Evento() {

    const [usuarios,setUsuarios]=useState([]);
   

    useEffect(()=>{
      async function fetchData() {
        
      
      const dataUsuarios = await llamados.GetUsers()
      const numero = dataUsuarios.length
 
        setUsuarios(numero)
        console.log(usuarios);

      }
        fetchData()

    },[])

  
   
  return (
    <div>
      <p>{usuarios}</p>
      <button>Solicitudes de Registros</button>
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



