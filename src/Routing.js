import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

export default class Routing extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes> 
           <Route path="/Login" element={<Login/> }
           />
           <Route path="/Register" element={<Register/>}/>
           <Route path="/Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}

