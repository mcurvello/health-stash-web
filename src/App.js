import "./App.css";
import { router } from "./routes";

import { AuthenticationContextProvider } from "./services/authentication/AuthenticationContext";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthenticationContextProvider>
      <RouterProvider router={router} />
    </AuthenticationContextProvider>
  );
}

export default App;
