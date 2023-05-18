import React from 'react'
import NavStudent from './NavStudent'
import HomePage from '../Home/HomePage'
import Footer from '../Home/Footer'

const StudentHome = () => {
  return (
    <>
      <NavStudent/>
      <HomePage mainContent={`Welcome ${localStorage.getItem('name')}, Thanks for taking our Bus Service.`} content="Bus Stops are far more interesting and useful places to have art than in museums."/>
      <Footer/>
    </>
  )
}

export default StudentHome
