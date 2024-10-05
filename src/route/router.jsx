import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Service from "../pages/Service/Service";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Layout from "../layouts/Layout/Layout";
import BlogSingle from "../pages/Blog/BlogSingle";
import TeamSingle from "../pages/Team/TeamSingle";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/team/:id",
        element: <TeamSingle />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogSingle />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
