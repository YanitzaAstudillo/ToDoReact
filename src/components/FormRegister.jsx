import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import llamados from '../services/llamados'

import Swal from 'sweetalert2'

function FormRegister() {


  const [nombreUsuario,SetNombreUsuario]=useState()
  const [emailUsuario,SetEmailUsuario]=useState()
  const [passwordUsuario,SetPasswordUsuario]=useState()


}

  function nombre(evento) {

     SetNombreUsuario(evento.target.value)

    
  }

  function email(evento) {
    SetEmailUsuario(evento.target.value)
    
  }

  function password(evento) {

    SetPasswordUsuario(evento.target.value)
    
  }

  
  function cargar() {
    llamados.PostUsers(nombreUsuario,emailUsuario,passwordUsuario)
  }

//Hooks para el sweetalert

const mostrarAlerta = () => {
    Swal.fire ({
      title: 'Exito!',
      text: 'Realizado',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <div>

        <label >Nombre</label>
        <input value={nombreUsuario} onChange={nombre}  type="text" />
        <br />
        <label >Email</label>
        <input value={emailUsuario} onChange={email} type="text" />
        <br />
        <label >Password</label>
        <input value={passwordUsuario} onChange={password} type="text" />
        <button onClick={cargar} >Registrarse</button>

        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Aqui</Link></p>

        <button onClick={mostrarAlerta}>Mostrar alerta</button>

    </div>
  )
}

export default FormRegister