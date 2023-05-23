import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import { SYSTEM_CONST } from "../../utils";
import { NavLink } from "react-router-dom";
import Icon from "../../components/common/icon";

class SidebarComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  renderIcon = (icon: any) => {
    return <Icon flagNationCode={icon} />;
  };

  render() {
    const menu = SYSTEM_CONST.MENU;
    // console.log(this.renderIcon("BsFillHouseFill", "dashboard"));

    return (
      <div className="sidebar">
        <Nav>
          {menu &&
            menu.length > 0 &&
            menu.map((item) => {
              return (
                <NavLink key={item.id} to={item.link}>
                  {this.renderIcon(item.icon)}

                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          {/* <Nav.Link href="#action1">
            <Bs.BsFillHouseFill />
            <span>Dashboard</span>
          </Nav.Link> */}
          {/* <Nav.Link href="#action2">
            <span>
          User</span>
          </Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </div>
    );
  }
}

export default SidebarComponent;
