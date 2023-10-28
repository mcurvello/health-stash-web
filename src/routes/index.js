import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Patients from "../pages/Patients";
import Practitioners from "../pages/Practitioners";
import Appointments from "../pages/Appointments";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pacientes",
    element: <Patients />,
  },
  {
    path: "/medicos",
    element: <Practitioners />,
  },
  {
    path: "/consultas",
    element: <Appointments />,
  },
];

export const router = createBrowserRouter(routes);
