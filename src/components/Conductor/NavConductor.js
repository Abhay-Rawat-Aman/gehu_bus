import React from 'react'
import { Link } from 'react-router-dom'

const NavConductor = () => {
  return (
    <>
      
<aside className="main-sidebar sidebar-dark-primary elevation-4">
 
    <Link href="index.php" className="brand-link">
      <img src="dist/img/logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
	  <span className="brand-text font-weight-light">GEHU Bhimtal BUS</span>
    </Link>


    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User pic"/>
        </div>
        <div className="info">
          <Link href="#" className="d-block">Conductor Panel</Link>
        </div>
      </div>


      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <Link href="fees.php" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Fees
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="notice.php" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
				Notice
				<span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
		  
		  <li className="nav-item">
            <Link href="action.php" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
			  Action
              </p>
            </Link>
          </li>
          
		  <li className="nav-item">
            <Link href="bus_manage.php" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
			  Add Bus
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="driver_conductor.php" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
			  Driver/ Conductor
              </p>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="../" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
			  Log Out
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    
    </div>

  </aside>
	
    </>
  )
}

export default NavConductor
