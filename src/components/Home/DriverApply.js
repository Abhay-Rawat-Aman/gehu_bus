import React from 'react'
import NavHome from './NavHome'
import Footer from './Footer'

const DriverApply = () => {
  return (
    <>
        <NavHome/>  
      <main id="main">
	<form method="post">
	<section id="hero" className="hero d-flex align-items-center">
  <div className="container py-5 h-100" style={{height:"10px"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              {
              <img src="assets/img/gehu_signup2.jpeg"
               alt="Sample pic" className="img-fluid"
               style={{borderTopLeftRadius:'.25rem',borderBottomLeftRadius:'.25rem', height:'660px', width:'93%'}}/>
              }
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black" style={{fontWeight:'800'}}>
                <h3 className="mb-5 text-uppercase" style={{fontWeight:'900', fontSize:'28px', textAlign:'center'}}>Driver Apply</h3>

                <div className="row">

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Fname Name</label>
						<input type="text" id="cfname" name="cfname" className="form-control form-control-lg" required />
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Lname Name</label>
						<input type="text" id="clname" name="clname" className="form-control form-control-lg" required />
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Contact No.</label>
						<input type="number" id="ccontact" name="ccontact" className="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Adhaar No.</label>
						<input type="number" id="cadhaar" name="cadhaar" className="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Driving Licence No.</label>
						<input type="number" id="drivingLicence" name="drivingLicence" className="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset</button>
                  <input type="submit" className="btn btn-warning btn-lg ms-2" value="Sign Up" name="signup"/>
                </div>				
				</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
</main>

      <Footer/>

    </>
  )
}

export default DriverApply
