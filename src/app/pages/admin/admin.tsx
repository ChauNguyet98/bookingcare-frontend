import React from "react";
import { Outlet } from "react-router-dom";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default Admin;
