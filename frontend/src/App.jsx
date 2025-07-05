import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/LandingPage/Landing'
import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import ForgotPasswordPage from './components/ForgotPass/ForgotPass'
import Dashboard from './components/Dashboard/Dashboard'
import CreateGroup from './components/CreateGroup/CreateGroup'
import YourListings from './components/Listings/YourListings'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-group' element={<CreateGroup />} />
        <Route path = '/your-listings' element={<YourListings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
