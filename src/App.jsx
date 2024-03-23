import logo from './logo.svg';
import './App.css';
import { Link, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contactus from './Components/Contactus/Contactus';
import Skills from './Components/Skills/Skills';

export default function App() {

  let routers = createBrowserRouter([
    {
      path: "", element: <LayOut />, children: [
        { path: "", element: <Home /> },
        { path: "portfolio", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "project", element: <Projects /> },
        { path: "Contactus", element: <Contactus /> },
        { path: "Skills", element: <Skills /> },

      ]
    }
  ])
  return (
    <>

      <RouterProvider router={routers} >
      </RouterProvider>
    </>

  )
}
