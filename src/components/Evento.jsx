import React, { useEffect, useState } from 'react'

import llamados from '../services/llamados';


//Funcion para contador y Hook usuarios con su seteo y el useEfect para no ciclar//
 function Evento() {

    const [usuarios,setUsuarios]=useState([]);
   

    useEffect(()=>{
      async function fetchData() {
  //funcion asyncrona para agarrar el Get de usuarios para mostrar la cantidad de registros//      
      
      const dataUsuarios = await llamados.GetUsers()
      const numero = dataUsuarios.length
 
        setUsuarios(numero)
        console.log(usuarios);

      }
        fetchData()

    },[])

  

   
  return (
    <div>
      <h3>{usuarios}</h3>
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



