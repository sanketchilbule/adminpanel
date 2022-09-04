import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import AppContent from '../../components/AppContent'

const Dashboard = () => {
  return (
    <div className = "dashboard-container d-flex">
      <SideBar/>
      <AppContent/>
    </div>
  )
}

export default Dashboard