import React from 'react'
// import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Subscribe from '../../Sections/Subscribe/Subscribe'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
