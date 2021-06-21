import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading, ResetCSS } from '@pancakeswap-libs/uikit'
import Header from 'components/Header'
import NavMenu from 'components/NavMenu'
import SideMenu from 'components/SideMenu'
import Container from 'components/layout/Container'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Presale = lazy(() => import('./views/Presale'))
const Swap = lazy(() => import('./views/Swap'))
const Referrals = lazy(() => import('./views/Referrals'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  const [showSideMenu, setShowSideMenu] = useState(false)

  const toggleShowSideMenu = () => {
    setShowSideMenu(!showSideMenu)
  }

  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <SideMenu showSideMenu={showSideMenu} toggleShowSideMenu={toggleShowSideMenu} />
      <Container>
        <Header />
        <NavMenu toggleShowSideMenu={toggleShowSideMenu} />
      </Container>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/nests">
            <Farms tokenMode />
          </Route>
          <Route path="/presale">
            <Presale />
          </Route>
          <Route path="/swap">
            <Swap />
          </Route>
          <Route path="/referrals">
            <Referrals />
          </Route>
          {/* <Route path="/pools"> */}
          {/*  <Pools /> */}
          {/* </Route> */}
          {/* <Route path="/lottery"> */}
          {/*  <Lottery /> */}
          {/* </Route> */}
          {/* <Route path="/ifo"> */}
          {/*  <Ifos /> */}
          {/* </Route> */}
          {/* <Route path="/nft"> */}
          {/*  <Nft /> */}
          {/* </Route> */}
          {/* Redirect */}
          {/* <Route path="/staking"> */}
          {/*  <Redirect to="/pools" /> */}
          {/* </Route> */}
          {/* <Route path="/syrup"> */}
          {/*  <Redirect to="/pools" /> */}
          {/* </Route> */}
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <NftGlobalNotification />
    </Router>
  )
}

export default React.memo(App)
