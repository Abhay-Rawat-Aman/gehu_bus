import React from 'react'
import NavHome from './NavHome'
import Footer from './Footer'
import BreadCrumbs from './BreadCrumbs'

const ContactUs = () => {
  return (
    <div>
        <NavHome/>
        <BreadCrumbs heading="Contact Us" name="Contact"/>

        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div>
          <iframe style={{border:'0', width:'100%', height: '340px'}} title="clglocation" src="https://maps.google.com/maps?q=graphic%20era%20hill%20unversity,%20bhimtal&t=&z=10&ie=UTF8&iwloc=&output=embed" allow='fullscreen'></iframe>
        </div>

        <div className="row gy-4 mt-4">

          <div className="col-lg-4">

            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p>Graphic Era Hill University, SatTal Road, Bhimtal, Nainital, Uttarakhand 263136</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>aman.programmer21@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="col-lg-4">

            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p>+91 95479 65395</p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>


        <Footer/>
    </div>
  )
}

export default ContactUs
