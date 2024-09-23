
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import authLoader from "./loaders/authLoader";
import Logout from "./components/Logout";
import DashboardWrapper from "./wrappers/DashboardWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        
      }
    ]
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
