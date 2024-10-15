import React from "react";
import { Nav, Logo, NavMenu, NavLink, Bars, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  const downloadPdf = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf";
    link.click();
  };
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
            <button
              className="btn PrimaryBtn"
              rel="noopener noreferrer"
              onClick={downloadPdf}
            >
              CV
            </button>
          </NavBtn>
          <Bars onClick={toggle}></Bars>
        </Nav>
      </div>
    );
};

export default Header;