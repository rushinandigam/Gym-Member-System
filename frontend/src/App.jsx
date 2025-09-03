import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Register from './components/Register'
import ViewAllCustomers from './components/ViewAllCustomers';
import SingleUserPage from './cards/SingleUser';
import UpdateUser from './components/UpdateUser';
import Message from './cards/Message';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes> 
          <Route path='/' element = {<Hero/> } /> 
          <Route path='/register' element  = {<Register/> }  />
          <Route path='/viewallcustomers' element  = {<ViewAllCustomers/> }  />
          <Route path="/user" element={<SingleUserPage />} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
