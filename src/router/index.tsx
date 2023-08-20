import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import MedicineList from "@/pages/medicine-list";
import MedicineInfoPage from "@/pages/medicine-info";

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
  },
  {
    path: '/medicine-info',
    element: <MedicineInfoPage />,
  }
];

export const router = createBrowserRouter(routes);