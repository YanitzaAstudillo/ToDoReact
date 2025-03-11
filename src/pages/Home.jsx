import React from 'react'

import Card from '../components/Card'

import Evento from '../components/Evento'
import Nav from '../components/Nav'

import '../styles/nav.css'

function Home() {
  return (
    <div className='estilo3'>
      <Nav />
      <Card />
      <Evento />

    </div>
  )
}

export default Home