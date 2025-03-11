import React from 'react'


const Nav= () => {
    return (
        <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Asistencia</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contacto">Contactenos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
      
    </ul>



      );
};

export default Nav;