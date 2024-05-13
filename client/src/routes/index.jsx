import { Outlet, useRoutes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return useRoutes([
    {
      element: (
        <>
          <Outlet />
          <ToastContainer transition={Bounce} />
        </>
      ),
      children: [
        {
          path: "/",
          exact: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
