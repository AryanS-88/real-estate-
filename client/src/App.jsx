import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import SignIn from './pages/SignIn'
import Signout from './pages/signout'
import Profile from './pages/profile'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<Signout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
