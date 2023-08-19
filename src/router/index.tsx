import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import MedicineList from "@/pages/medicine-list";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/signup/*',
    element: <Signup />,
  },
  {
    path: "/medicine-list/*",
    element: <MedicineList />,
  }
];

export const router = createBrowserRouter(routes);