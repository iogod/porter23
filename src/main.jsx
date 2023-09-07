import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from "./Projects"
import Navbar from './Navbar.jsx';
import ProjectDetail from './ProjectDetail.jsx';
import Experience from './Experience';
import About from './About'
import Boundary from './Boundary.jsx';

const router = createBrowserRouter([
  {
    element: <Navbar/>,
    children: [
      {
        path: "/",
    element: <App />
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/experience/",
        element: <Experience/>
      },
      {
        path: "/about/",
        element: <About/>
      },
      {
        path: "/projects/:proj",
        element: <ProjectDetail/>
      },
      {
        path: "*",
        element: <Boundary/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 
<RouterProvider router={router} />
 


  </React.StrictMode>,
)
