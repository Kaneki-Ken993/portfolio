import React from "react";
import { Nav, Logo, NavMenu, NavLink, Bars, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
    return (
      <div className="Container" style={{ padding: 0 }}>
        <Nav>
          <Logo to="/">
            <img src="/logo.png" alt="logo" />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects">
              Projets
            </NavLink>
            <NavLink className="menu-item" to="about">
              À Propos
            </NavLink>
            <NavLink className="menu-item" to="contact">
              Me Contacter
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a
              href="https://linkedin.com/in/omar-el-hadi-90011b2a5"
              className="btn PrimaryBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </NavBtn>
          <Bars onClick={toggle}></Bars>
        </Nav>
      </div>
    );
};

export default Header;