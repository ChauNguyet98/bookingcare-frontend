import "./App.scss";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import NavBar from "./layout/navbar";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AdminComponent from "./app/pages/admin/admin";
import DashboardComponent from "./app/pages/admin/dashboard/dashboard";
import AuthComponent from "./app/pages/auth/auth";
import LoginComponent from "./app/pages/auth/login/login";
import { SYSTEM_CONST } from "./app/utils";
import { ProtectedRoute, ProtectedRouteProps } from "./app/core";

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath:
      "/" + SYSTEM_CONST.ROUTE.AUTH.AUTH + "/" + SYSTEM_CONST.ROUTE.AUTH.LOGIN,
  };

  const router = createBrowserRouter([
    {
      path: SYSTEM_CONST.ROUTE.AUTH.AUTH,
      element: <AuthComponent />,
      children: [
        {
          path: SYSTEM_CONST.ROUTE.AUTH.LOGIN,
          element: <LoginComponent />,
        },
        {
          index: true,
          path: "*",
          element: <Navigate to={SYSTEM_CONST.ROUTE.AUTH.LOGIN} replace />,
        },
      ],
    },
    {
      path: SYSTEM_CONST.ROUTE.ADMIN.ADMIN,
      element: <AdminComponent />,
      children: [
        {
          path: SYSTEM_CONST.ROUTE.ADMIN.DASHBOARD,
          // element: <DashboardComponent />,
          element: (
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<DashboardComponent />}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <NavBar />
        <Routes
          element={
            <div>
              <h1>Layout</h1>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
