import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  background: #151418;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
   const downloadPdf = () => {
     const pdfUrl = "/CV.pdf";
     const link = document.createElement("a");
     link.href = pdfUrl;
     link.download = "CV.pdf";
     link.click();
   };
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink to="projects" className="menu-item" onClick={toggle}>
          Projects
        </NavLink>
        <NavLink to="about" className="menu-item" onClick={toggle}>
          About
        </NavLink>
        <NavLink to="contact" className="menu-item" onClick={toggle}>
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <button className="btn PrimaryBtn"
        onClick={downloadPdf}
        target="_blank"
        rel="noopener noreferrer"
        >
          CV
        </button>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;