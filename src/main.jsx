import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./component/sections/root.jsx";
import About from "./component/sections/about.jsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Certifications from "./component/sections/certifications.jsx";
import Projects from "./component/sections/projects";
import Project from "./component/sections/project";
import Contact from "./component/sections/contact";
import NotFound from "./component/sections/notFound.jsx";
import Mentiosnlegales from "./component/sections/mentiosnlegales.jsx";
import Wait from "./component/sections/wait.jsx";


const router = createBrowserRouter([
    {
        path: "/*",
        element: <Wait></Wait>,
    },
    // {
    //     path: "/about",
    //     element: <About></About>,
    // },
    // {
    //     path: "/certifications",
    //     element: <Certifications></Certifications>,
    // },
  /*  {
        path: "/compétences",
        element: <Skills></Skills>,
    },*/
    // {
    //     path: "/projets",
    //     element: <Projects></Projects>,
    // },
    // {
    //     path: "/projet/:projId",
    //     element: <Project></Project>,
    // },{
    //     path: "/contact",
    //     element: <Contact></Contact>,
    // },{
    //     path: "/mentionslegales",
    //     element: <Mentiosnlegales> </Mentiosnlegales>,
    // },{
    //     path: "*",
    //     element: <NotFound></NotFound>,
    //
    // }

    /*,{
        path: "/deroulement",
        element: <Deroulement></Deroulement>,
    },{
        path: "/tarifs",
        element: <Tarifs></Tarifs>,
    },{
        path: "/qualites",
        element: <Quality></Quality>,
    },*/
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>,
)
