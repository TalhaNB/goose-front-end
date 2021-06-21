import React, { useState } from 'react'
import { BarsIcon } from 'react-line-awesome'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const navItemStyles = css`
  display: flex;
  align-items: center;
  color: white;
  padding: 12px 15px;
  text-transform: uppercase;
  text-shadow: 2px 2px 3px #000;
  font-size: 14px;
  font-weight: 500;
  transition: 0.1s ease-in-out;
  @media (max-width: 767px) {
    padding: 12px;
  }

  &:hover {
    text-decoration: none;
    background: #7f29d0;
  }

  img {
    width: 25px;
    margin-right: 8px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`

const Nav = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, #4a13c7, #c100d6);
  border-radius: 5px 5px 0 0;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
`

const NavListItem = styled.li`
  display: inline-flex;
  padding-left: 0;
`

const NavLink = styled(Link)`
  ${navItemStyles}
`

const AnchorLink = styled.a`
  ${navItemStyles}
`

const MenuTrigger = styled.button`
  ${navItemStyles}
  background: transparent;
  cursor: pointer;
  border: 0;
  font-size: 28px;

  &:hover {
    border-radius: 5px 0 0 0;
  }
`

const NavMenu = ({ toggleShowSideMenu }) => {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <MenuTrigger onClick={toggleShowSideMenu}>
            <BarsIcon />
          </MenuTrigger>
        </NavListItem>
        <NavListItem>
          <NavLink to="/">
            <img alt="Home" src="/images/crystal.svg" />
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/presale">
            <img alt="Presale" src="/images/rocket.svg" />
            Presale
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/swap">
            <img alt="Swap" src="/images/swap.svg" />
            Swap
          </NavLink>
        </NavListItem>
        {/* <NavListItem>
          <NavLink to='/'>
            <img alt="Trade" src="/images/galaxy.svg" />
            Trade
          </NavLink>
        </NavListItem> */}
        <NavListItem>
          <NavLink to="/farms">
            <img alt="Farms" src="/images/galaxy.svg" />
            Farms
          </NavLink>
        </NavListItem>
        <NavListItem className="d-sm-none">
          <NavLink to="/nests">
            <img alt="Nests" src="/images/midgard.svg" />
            Nests
          </NavLink>
        </NavListItem>
        {/* <NavListItem>
          <NavLink to=''>
            <img alt="Info" src="/images/vanaheim.svg" />
            Info
          </NavLink>
        </NavListItem> */}
        <NavListItem className="d-sm-none">
          <AnchorLink href="https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link">
            <img alt="Partnerships/IFO" src="/images/thunder.png" />
            Partnerships/IFO
          </AnchorLink>
        </NavListItem>
        <NavListItem className="d-sm-none">
          <AnchorLink href="https://www.goosedefi.com/files/hackenAudit.pdf">
            <img alt="Audit by Hacken" src="/images/sports-car.svg" />
            Audit by Hacken
          </AnchorLink>
        </NavListItem>
        <NavListItem className="d-sm-none">
          <AnchorLink href="https://certik.org/projects/goose-finance">
            <img alt="Audit by CertiK" src="/images/sports-car.svg" />
            Audit by CertiK
          </AnchorLink>
        </NavListItem>
      </NavList>
    </Nav>
  )
}

export default NavMenu
