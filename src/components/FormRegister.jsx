import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import llamados from '../services/llamados'

import Swal from 'sweetalert2'

function FormRegister() {


  const [nombreUsuario,SetNombreUsuario]=useState()
  const [emailUsuario,SetEmailUsuario]=useState()
  const [passwordUsuario,SetPasswordUsuario]=useState()




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
      mostrarAlerta()

  }

//lambda para el sweetalert

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
        <br />
        <label >Nombre</label><br />
        <input value={nombreUsuario} onChange={nombre}  type="text" /><br />
        <br />
        <label >Email</label><br />
        <input value={emailUsuario} onChange={email} type="text" /><br />
        <br />
        <label >Password</label><br />
        <input value={passwordUsuario} onChange={password} type="text" /><br />
        <br />
        <button onClick={cargar} >Registrarse</button><br />
        <br />
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Aqui</Link></p>
        <br />
        <h4>DIRECTORIO DE SOLICITUDES<Link to="/Home">Link data solicitudes</Link></h4>

    </div>
  )
}

export default FormRegister