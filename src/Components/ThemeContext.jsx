import { createContext,useState } from 'react'
import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import Navbar from "./Navbar"

const Them = createContext();
const ThemeContext = () => {
  const [themo,setThemo] = useState("light");
  const handleThemo = () => {
    if(themo==="light"){
        setThemo("dark")
    }else{
        setThemo("light")
    }
}
  return (
    <Them.Provider value={{handleThemo, themo}}>
        <Navbar></Navbar>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </Them.Provider>
  )
}

export {ThemeContext, Them}