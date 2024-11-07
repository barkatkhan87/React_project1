"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header"

const page = () => {
  const [name, setname] = useState("Barkatkhan")
  const [sname, setsname] = useState("Bhargav")
  return (
    <>
    <Header user = {name} sname = {sname}/>
    <h1>{name}</h1>
    </>
  )
}

export default page