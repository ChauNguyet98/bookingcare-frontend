import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./navbar/navbar";
import SidebarComponent from "./sidebar/sidebar";

class LayoutComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row gap-4 w-full h-full bg-gray-100">
        <SidebarComponent></SidebarComponent>
        <div className="flex flex-col gap-4">
          <NavbarComponent></NavbarComponent>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutComponent;
