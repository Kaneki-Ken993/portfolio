import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
`;
export const Logo = styled('div')`
    img{
        margin-top: 50px;
        width: 207px;
        height: 207px;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    .menu-item + .menu-item {
        margin-left: 1rem;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;