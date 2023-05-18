import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const NavHome = () => {

	const [top, setTop] = useState(false);
	const hadleInfiniteScroll = async () => {
		try {
		if ( document.documentElement.scrollTop > 10)
			setTop(false);
		else
			setTop(true);
		} catch (error) {

		}
	  }
	  useEffect(() => {
		window.addEventListener("scroll", hadleInfiniteScroll);
		return () => window.removeEventListener("scroll", hadleInfiniteScroll);
	  }, [])


	  

	return (
    <header id="header" className={top ?'header d-flex align-items-center fixed-top':'header d-flex align-items-center fixed-top sticked'}  style={{/*backgroundColor:navColor*/}} >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="index.html" className="logo d-flex align-items-center">
        <img src="assets/img/logo1.png" alt=""/> 
        <h1>GEHU BUS</h1> 
      </Link>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about.html">About Us</Link></li>
          <li><Link to="price">Pricing</Link></li>
          <li><Link to="our_team">Team</Link></li>
          <li><Link to="contact_us">Contact</Link></li>
		  
		  <li>
			<div className="dropdown">
				<Link className="dropdown-toggle get-a-quote" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Sign Up
				</Link>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><Link className="dropdown-item" to="student_signup">Student</Link></li>
				</ul>
			</div>
		  </li>

		  <li>
			<div className="dropdown">
				<Link className="dropdown-toggle get-a-quote" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Apply
				</Link>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><Link className="dropdown-item" to="conductor_apply">Conductor</Link></li>
					<li><Link className="dropdown-item" to="driver_apply">Driver</Link></li>
				</ul>
			</div>
		  </li>


		  <li>
			<div className="dropdown">
				<Link className="dropdown-toggle get-a-quote" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Login
				</Link>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><Link className="dropdown-item" to="student_login">Student</Link></li>
					<li><Link className="dropdown-item" to="conductor_login">Conductor</Link></li>
					<li><Link className="dropdown-item" to="coordinator_login">Coodinator</Link></li>
					<li><Link className="dropdown-item" to="admin_login">Admin</Link></li>
				</ul>
			</div>
		  </li>
        </ul>
      </nav>

    </div>
  </header>
  )
}

export default NavHome
