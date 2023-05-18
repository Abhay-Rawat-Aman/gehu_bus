import React from 'react'
import NavStudent from './NavStudent'
import Footer from '../Home/Footer'
import BreadCrumbs from '../Home/BreadCrumbs'

const ChangePasswordStudent = () => {
  return (
    <div>
      <NavStudent/>
      <BreadCrumbs heading="Change Password" name="Change Password"/>
      <section className="team">
    
    <div className="container">
      <div className="card card-registration my-4">
        <form className='p-5' >
        <div className="row">
          <div className="col text-black" style={{fontWeight:'800'}}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example8">Current Password</label>
            <input type="password" name="student" id="" className="form-control form-control-lg" required />
          </div>
          </div>
          </div>



          <div className="row mb-2">
          <div className="col-12 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline">
            <label className="form-label" htmlFor="form3Example8">New Password</label>
            <input type="password" id=""  autoComplete='off' className="form-control form-control-lg" name="id" required />
          </div>
          </div>
          </div>
          
          <div className="row mt-3">
          <div className="col-12 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline">
            <label className="form-label" htmlFor="form3Example8">New Password</label>
            <input type="password" id=""  autoComplete='off' className="form-control form-control-lg" name="id" required />
          </div>
          </div>
          </div>
          
          <div className="d-flex justify-content-end pt-3">
                  <input type="submit" className="btn btn-warning btn-lg ms-2" value="Change Pasword" name="changePassword"/>
                </div>

          </form>

        </div>
    </div>

    </section>
    
      <Footer/>
    </div>
  )
}

export default ChangePasswordStudent
