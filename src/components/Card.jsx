import React, { useState,useEffect } from 'react'

import llamados from '../services/llamados';

import Swal from 'sweetalert2';

//Hooks y funcion asincrona para obtencion de datos creados//
function Card() {

  const [usuarios,SetUsuarios]=useState ([])
  const [nombre,SetNombre]=useState('')
  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  
  
//funcion asyncrona para la obtencion de datos mediante el Get
  useEffect(() => {
       async function fetchDataUsers() {
         const datos = await llamados.GetUsers()
         console.log(datos);
         SetUsuarios(datos)
       };
       fetchDataUsers();
     }, []); 

     //funcion eliminar jalando el id para su funcionalidad//
     function eliminar(id) {
      console.log(id);
      
      llamados.DeleteUser(id)
      eli()
     }

     const eli = () => {
      Swal.fire({
        title:'eliminar usuario',
        text: 'desea eliminar?',
        icon: 'question',
        confirmButtonText: 'aceptar',
        cancelButtonText: 'cancelar'
      });
    }

//funcion editar con find para encontrar datos y guardar la edicion

     function editar(id) {
      console.log(nombre,email, password,id)

      llamados.UpdateUsers(nombre,email,password,id)
        edit()
      }

        const edit = () => {
          Swal.fire({
            title:'edicion usuario',
            text: 'editar usuario?',
            icon: 'question',
            confirmButtonText: 'aceptar',
            cancelButtonText: 'cancelar'
          });
  
        }
     


  return (
    <div>
      <h3>CRUD USUARIOS</h3>
      <ul>
        {usuarios.map((usuario,index) => (
          <li key={index}>
            <br />
            <strong>Paciente:</strong> {usuario.nombre} <br />
            <input  onChange={(evento)=>SetNombre(evento.target.value)} type="text" />
            <br />
            <strong>Email:</strong> {usuario.email} <br />
            <input  onChange={(evento)=>SetEmail(evento.target.value)} type="text" />
            <br />
            <strong>Password:</strong> {usuario.password} <br />
            <input  onChange={(evento)=>SetPassword(evento.target.value)} type="text" />
            <br />
            <button onClick={()=>eliminar(usuario.id)} >Eliminar</button> <br />
            <button onClick={()=>editar(usuario.id)} >Editar</button> <br />
            
            
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Card