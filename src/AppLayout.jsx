import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './helper/store'

const AppLayout = () => {

 
  return (
    <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
  )
}

export default AppLayout