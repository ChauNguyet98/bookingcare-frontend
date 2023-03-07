import "./App.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./layout/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
