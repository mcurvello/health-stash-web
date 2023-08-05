import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
];

export const router = createBrowserRouter(routes);