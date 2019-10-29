import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'

import Header from '../header'
import Footer from '../footer'
import './layout.css'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header headerLinks={siteConfig.headerLinks} />
    {children}
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
