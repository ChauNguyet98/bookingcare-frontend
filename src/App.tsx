import "./App.scss";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import NavBar from "./layout/navbar";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./app/pages/auth/auth";
import Login from "./app/pages/auth/login/login";
import Dashboard from "./app/pages/admin/dashboard/dashboard";
import Admin from "./app/pages/admin/admin";
import { SYSTEM_CONST } from "./app/utils";

function App() {
  const router = createBrowserRouter([
    {
      path: SYSTEM_CONST.ROUTE.AUTH.AUTH,
      element: <Auth />,
      children: [
        {
          path: SYSTEM_CONST.ROUTE.AUTH.LOGIN,
          element: <Login />,
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
      element: <Admin />,
      children: [
        {
          path: SYSTEM_CONST.ROUTE.ADMIN.DASHBOARD,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <div>
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
