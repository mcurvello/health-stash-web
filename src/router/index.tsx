import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";

const routes = [
  {
    path: "/",
    element: <Login />,
  }
];

export const router = createBrowserRouter(routes);