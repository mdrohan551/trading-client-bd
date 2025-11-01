import React from 'react'
import FrontNav from '../components/FrontMenu/FrontNav'
import FrontFooter from '../components/FrontMenu/FrontFooter'
import { Outlet } from 'react-router-dom'

const MasterLayout = ():React.ReactElement => {
  return (
     <>
       <FrontNav/>
         <Outlet/>
       <FrontFooter/>
     </>
  )
}

export default MasterLayout