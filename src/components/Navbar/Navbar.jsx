import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
    <NavItem title={'Inicio'}/>
    <NavItem title={'Series'}/>
    <NavItem title={'Peliculas'}/>
    <NavItem title={'Novedades populares'}/>
    <NavItem title={'Mi lista'}/>
    </>
  )
}

export default Navbar