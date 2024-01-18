"use client"
import React from 'react'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import Division from './Navbar/Division'
const page = () => {
  return (
    <div>
      <Navbar />
      <Division />
      <Home />
    </div>
  )
}

export default page

