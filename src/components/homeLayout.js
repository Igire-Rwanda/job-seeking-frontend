import { Home } from '@mui/icons-material'
import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'

const HomeLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{}}>{props.children}</div>

      <Footer />

    </div>
  )
}

export default HomeLayout