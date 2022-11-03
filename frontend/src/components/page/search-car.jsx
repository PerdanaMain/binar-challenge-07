import React from 'react'
import Navbar from '../layouts/navbar/navbar'
import HeroPanel from '../layouts/hero/heropanel'
import Footer from '../layouts/footer/footer'
import Panel from '../layouts/panel/Panel'

const search = () => {
  return (
    <div>
      <Navbar/>
      <HeroPanel/>
      <Panel/>
      <Footer/>
    </div>
  )
}

export default search