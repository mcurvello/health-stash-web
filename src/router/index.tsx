import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import AddPhysicianPage from "@/pages/add-physician";
import AddPatientPage from "@/pages/add-patient";
import MedicineList from "@/pages/medicine-list";
import MedicineInfoPage from "@/pages/medicine-info";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/add-physician/*',
    element: <AddPhysicianPage />,
  },
  {
    path: '/add-patient/*',
    element: <AddPatientPage />,
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