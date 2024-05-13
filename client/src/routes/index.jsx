import { Outlet, useRoutes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return useRoutes([
    {
      element: (
        <>
          <Outlet />
          <ToastContainer newestOnTop={true} transition={Bounce} />
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
          element: (
            <RedirectIfLoggedIn to="/profile">
              <Login />
            </RedirectIfLoggedIn>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute roles={["user"]}>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute roles={["admin"]}>
              <Dashboard />
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
