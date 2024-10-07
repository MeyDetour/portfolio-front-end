import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './app.css'
import Root from "./component/sections/root.jsx";
import About from "./component/sections/about.jsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Certifications from "./component/sections/certifications.jsx";
import Skills from "./component/sections/skills.jsx";
import Projects from "./component/sections/projects";
import Project from "./component/sections/project";
import Contact from "./component/sections/contact";
import Deroulement from "./component/sections/deroulement";
import Tarifs from "./component/sections/Tarifs";
import Quality from "./component/sections/quality";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/certifications",
        element: <Certifications></Certifications>,
    },
    {
        path: "/compétences",
        element: <Skills></Skills>,
    },   {
        path: "/projets",
        element: <Projects></Projects>,
    },
    {
        path: "/projet/:projId",
        element: <Project></Project>,
    },{
        path: "/contact",
        element: <Contact></Contact>,
    },{
        path: "/deroulement",
        element: <Deroulement></Deroulement>,
    },{
        path: "/tarifs",
        element: <Tarifs></Tarifs>,
    },{
        path: "/qualites",
        element: <Quality></Quality>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>,
)
