import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import ProjectDetails from "../Pages/Project/ProjectDetails";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/project",
        element: <Project></Project>,
        loader: () =>
          fetch("https://portfolio-server-orcin.vercel.app/project"),
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-orcin.vercel.app/project/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/skill",
        element: <Skills></Skills>,
      },
    ],
  },
]);
export default router;
