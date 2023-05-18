import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-12 footer-info">
          <Link to="index.html" className="logo d-flex align-items-center">
            <span><img src="assets/img/logo1.png" alt=""/> 
        GEHU BUS</span>
          </Link>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div className="social-links d-flex mt-4">
            <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
            <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
            <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
            <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About us</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Team</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
		
		
        <div className="col-lg-2 col-6 footer-links">
          <h4>Panel</h4>
          <ul>
            <li><Link to="student_login.php">Student</Link></li>
            <li><Link to="conductor_login.php">Conductor</Link></li>
            <li><Link to="coordinator_login.php">Coordinator</Link></li>
            <li><Link to="admin_login.php">Admin</Link></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
          Graphic Era Hill University,<br/>
          SatTal Road, Bhimtal,<br/>
          Uttarakhand, 263136<br/>
          <strong>Phone:</strong> +91 95487 65395<br/>
            <strong>Email:</strong> aman.programmer21@gmail.com<br/>
          </p>

        </div>

      </div>
    </div>

    <div className="container mt-4">
      <div className="copyright">
        &copy; Copyright <strong><span>Abhay Rawat and his team</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <Link to="https://bootstrapmade.com/">Abhay Rawat ans his team</Link>
      </div>
    </div>

  </footer>
  )
}

export default Footer
