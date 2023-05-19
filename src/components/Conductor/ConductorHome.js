import React from 'react'
import NavConductor from './NavConductor'
import ConductorSidebar from './ConductorSidebar'

const ConductorHome = () => {
  return (
    <div className="home">
  <ConductorSidebar/>
    <div className="homeContainer">
    <NavConductor/>
     
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

export default ConductorHome
