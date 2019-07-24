import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Layout.scss'

const Layout = (props) => (
  <div>
    <Header user={props.user}/>
    {props.children}
    <Footer user={props.user}/>
  </div>
)

export default Layout
