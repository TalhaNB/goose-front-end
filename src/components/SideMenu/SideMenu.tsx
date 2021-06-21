import React, { useState, Dispatch } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { BookIcon, TelegramIcon, TwitterIcon } from 'react-line-awesome'

interface ISideMenu {
  showSideMenu?: any
  toggleShowSideMenu?: any
}

const sideLinkStyles = css`
  display: flex;
  align-items: center;
  padding: 16px 22px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: #33394b;
  }

  img {
    width: 25px;
    margin-right: 28px;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000070;
  z-index: 200;
  overflow: hidden;

  &.hidden {
    display: none;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  height: 100vh;
  min-width: 250px;
  background: #12192e;
  z-index: 300;
  transition: 0.1s ease-in-out;
  overflow-y: auto;

  &.closed {
    left: -330px;
  }

  .logo {
    width: 180px;
    margin: 0 auto;
  }
`

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 150px;
  height: 100%;
`

const SideNavItem = styled(Link)`
  ${sideLinkStyles}
`

const SideNavAnchor = styled.a`
  ${sideLinkStyles}
`

const SideFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #0c1121;
  width: 100%;
  padding: 20px;
  color: white;
  background: #12192e;
`

const SocialButton = styled.button`
  border: 0;
  background: white;
  color: black;
  border-radius: 100%;
  font-size: 24px;
`

const SideMenu: React.FC<ISideMenu> = ({ showSideMenu, toggleShowSideMenu }) => {
  return (
    <>
      <Menu className={!showSideMenu && 'closed'}>
        <img alt="Logo" src="/images/logo.png" className="logo" />
        <SideNav>
          <SideNavItem to="/presale" onClick={toggleShowSideMenu}>
            <img alt="Presale" src="/images/rocket.svg" />
            Presale
          </SideNavItem>
          <SideNavItem to="/swap" onClick={toggleShowSideMenu}>
            <img alt="Swap" src="/images/swap.svg" />
            Swap
          </SideNavItem>
          <SideNavItem to="/farms" onClick={toggleShowSideMenu}>
            <img alt="Farms" src="/images/galaxy.svg" />
            Farms
          </SideNavItem>
          <SideNavItem to="/nests" onClick={toggleShowSideMenu}>
            <img alt="Nests" src="/images/midgard.svg" />
            Nests
          </SideNavItem>
          <SideNavItem to="/referrals" onClick={toggleShowSideMenu}>
            <img alt="Nests" src="/images/midgard.svg" />
            Referrals
          </SideNavItem>
          <SideNavAnchor href="https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link">
            <img alt="Partnerships/IFO" src="/images/thunder.png" />
            Partnerships/IFO
          </SideNavAnchor>
          <SideNavAnchor href="https://www.goosedefi.com/files/hackenAudit.pdf">
            <img alt="Audit by Hacken" src="/images/sports-car.svg" />
            Audit by Hacken
          </SideNavAnchor>
          <SideNavAnchor href="https://certik.org/projects/goose-finance">
            <img alt="Audit by CertiK" src="/images/sports-car.svg" />
            Audit by CertiK
          </SideNavAnchor>
        </SideNav>
        <SideFooter>
          <SocialButton>
            <BookIcon />
          </SocialButton>
          <SocialButton>
            <TelegramIcon />
          </SocialButton>
          <SocialButton>
            <TwitterIcon />
          </SocialButton>
        </SideFooter>
      </Menu>
      <Overlay className={!showSideMenu && 'hidden'} onClick={toggleShowSideMenu} />
    </>
  )
}

export default SideMenu
