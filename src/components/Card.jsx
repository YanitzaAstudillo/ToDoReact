import React, { useState,useEffect } from 'react'

import llamados from '../services/llamados';

//Hooks y funcion asincrona para obtencion de datos creados
function Card() {

  const [usuarios,SetUsuarios]=useState ([])
  const [nombre,SetNombre]=useState('')
  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  const [usuarioMostrarId, SetusuarioId] = useState(null);
  

  useEffect(() => {
       async function fetchDataUsers() {
         const datos = await llamados.GetUsers()
         console.log(datos);
         SetUsuarios(datos)
       };
       fetchDataUsers();
     }, []); 
     function eliminar(id) {
      console.log(id);
      
      llamados.DeleteUser(id)
      
     }

//funcion editar con find para encontrar datos y guardar la edicion

     function editar(id) {
      const usuarioEditar = usuarios.find((usuario)=> usuario.id ===id);
      if (usuarioEditar){
        SetNombre(usuarioEditar.nombre);
        SetEmail(usuarioEditar.email);
        SetPassword (usuarioEditar.password);
        SetusuarioId (id);
      }
      
     }
    
     async function guardarEdicion (){
      if (usuarioMostrarId){
        await llamados.UpdateUsers (nombre, email, password, usuarioMostrarId);
        usuarioMostrarId (null);
        SetNombre ('');
        SetEmail ('');
        SetPassword ('');
      }
      llamados.UpdateUsers(nombre,email,password)
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
            
            <strong>Password:</strong> {usuario.password}
            <input  onChange={(evento)=>SetPassword(evento.target.value)} type="text" />
            
            <button onClick={()=>eliminar(usuario.id)} >Eliminar</button>
            <button onClick={()=>editar(usuario.id)} >Editar</button>
            
            
          </li>
        ))}
      </ul>
      { usuarioMostrarId && (
        <div>
          <button onClick={guardarEdicion}>Guardar cambios</button>
        </div>
      )

      }



    </div>
  )
}

export default Card