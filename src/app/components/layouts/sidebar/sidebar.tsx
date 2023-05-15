import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

class SidebarComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="w-60 h-full ml-1 my-1 bg-white rounded-lg shadow-md">
        <Nav className="flex flex-col ">
          <Nav.Link href="#action1">Dashboard</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default SidebarComponent;
