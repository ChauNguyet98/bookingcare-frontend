import React from "react";
import { Outlet } from "react-router-dom";

class AdminComponent extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default AdminComponent;
