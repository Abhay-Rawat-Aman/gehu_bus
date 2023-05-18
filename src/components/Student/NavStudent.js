import React,{useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

const NavStudent = () => {

    const history = useHistory();
    if(!localStorage.getItem('token'))
      history.push('/');
    console.log(localStorage.getItem('student_id'));
    if(localStorage.getItem('token') && !localStorage.getItem('student_id'))
      history.push('/choose_bus');

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

      const mystyleul ={
        backgroundColor:'rgba(14, 29, 52, 0.9)',
        borderRadius:10
      }
      const mystylelih={
        color:'rgba(255, 255, 255, 0.6)'
      }

  return (
    <>
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
          <li><Link to="/student_home">Home</Link></li>
          
          <li className="dropdown">
            <Link to="#">
                <span>Bus</span> 
                <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul style={mystyleul}>
                <li><Link to="r_and_t" style={mystylelih}>Route & Timing</Link></li>
                <li><Link to="student_price" style={mystylelih}>Price</Link></li>
            </ul>
          </li>

          
          <li className="dropdown">
            <Link to="#">
                <span>Book Seat</span> 
                <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul style={mystyleul}>
                <li><Link to="student_morning" style={mystylelih}>Morning</Link></li>
                <li><Link to="#" style={mystylelih}>Afternoon</Link></li>
                <li><Link to="#" style={mystylelih}>Evening</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">
                <span>Pay</span> 
                <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul style={mystyleul}>
                <li><Link to="#" style={mystylelih}>Pay Fees</Link></li>
                <li><Link to="#" style={mystylelih}>Pay Fine</Link></li>
            </ul>
          </li>

		  <li><Link to="">Live Location</Link></li>

      <li className="dropdown">
            <Link to="#">
                <span>More</span> 
                <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul style={mystyleul}>
                <li><Link to="student_notice" style={mystylelih}>Notice</Link></li>
                <li><Link to="student_camplaint" style={mystylelih}>Camplaint</Link></li>
                <li><Link to="#" style={mystylelih}>Emergency</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">
                <span>Welcome, {localStorage.getItem('name')}</span> 
                {
                  /*
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>*/
                }
                <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul style={mystyleul}>
                <li><Link to="student_change_password" style={mystylelih}>Change Password</Link></li>
                <li><Link to="student_edit_details" style={mystylelih}>Edit Details</Link><hr style={{backgroundColor:'white',height:'5px'}}/></li>
                <li><Link to="#" style={mystylelih}>Log Out</Link></li>
            </ul>
          </li>


          <li>
			</li>

        </ul>
      </nav>

    </div>
  </header>
    </>
  )
}

export default NavStudent
