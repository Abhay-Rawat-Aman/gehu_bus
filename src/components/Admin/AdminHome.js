import React from 'react'
import NavAdmin from './NavAdmin'
import AdminSidebar from './AdminSidebar'
import Widget from './Widget'
import "./home.css"

const AdminHome = () => {
  return (
    <div className="home">
       <AdminSidebar/>
       <div className="homeContainer">
        <NavAdmin/>
        
        <div className="listContainer">
          <div className="listTitle1">
              Driver Request
          </div>
        
          <div className="listTitle2">
              Driver Details
          </div>
        </div>
       </div>
    </div>

    )
}

export default AdminHome
