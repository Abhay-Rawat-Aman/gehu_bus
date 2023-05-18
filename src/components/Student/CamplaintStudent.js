import React, { useState } from 'react'
import NavStudent from './NavStudent'
import Footer from '../Home/Footer'
import BreadCrumbs from '../Home/BreadCrumbs'

const CamplaintStudent = () => {

  const [selectStudent,setSelectStudent] = useState(true);
  const handleChoose = (e) =>{
    e.preventDefault();
    console.log(e.target.value,e.target.value==="Student");
    if(e.target.value==="Student")
    {
      setSelectStudent(false);
    }
    else
    {
      setSelectStudent(true);
    }
  }
  return (
    <>
    <NavStudent/>
    <BreadCrumbs heading="Camplaint" name="Camplaint" />
    <section className="team">
    
    <div className="container">
      <div className="card card-registration my-4">
        <form className='p-5' >
        <div className="row">
          <div className="col-6 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example8">Choose One</label>
            <select name="student" id="" className="form-control form-control-lg" onChange={handleChoose}>
              <option>Driver</option>
              <option>Conductor</option>
              <option>Student</option>
              <option>Others</option>             
            </select>
          </div>
          </div>

          <div className="col-6 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example8">Choose One</label>
            <input type="date" name="student" id="" className="form-control form-control-lg"/>
          </div>
          </div>
          </div>

          <div className="row">

          <div className="col-6 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline">
            <label className="form-label" htmlFor="form3Example8" >Student Seat No.</label>
            <select name="" id="" className="form-control form-control-lg" disabled={selectStudent}>
              <option>Aman</option>
              <option>Fun</option>
            </select>
          </div>
          </div>
          

          <div className="col-6 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline">
            <label className="form-label" htmlFor="form3Example8" >Student Name</label>
            <input name="" id="" className="form-control form-control-lg" disabled={true}/>
          </div>
          </div>
          </div>


          <div className="row mt-4">
          <div className="col-12 text-black" style={{fontWeight:'800'}}>
          <div className="form-outline">
            <label className="form-label" htmlFor="form3Example8">Camplaint</label>
            <input type="text" id=""  autoComplete='off' className="form-control form-control-lg" name="id" required />
          </div>
          </div>
          </div>
          </form>

        </div>
    </div>

    </section>
    <Footer/>
    </>
  )
}

export default CamplaintStudent
