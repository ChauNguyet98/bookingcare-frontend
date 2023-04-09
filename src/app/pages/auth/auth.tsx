import React from "react";
import { Outlet } from "react-router-dom";

class AuthComponent extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default AuthComponent;
