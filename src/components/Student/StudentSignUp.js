import React, { useState } from 'react'
import Footer from '../Home/Footer'
import NavHome from '../Home/NavHome'

const StudentSignUp = () => {
  
  const course=['BTech','BCA','BSc','MCA'];
  const [branch,setBranch]=useState(['Computer Science','Mechanical']);
  const [avlbranch,setAvlBranch]=useState(false);
  const [sem,semUpdate]=useState([1,2,3,4,5,6]);
  const city=["Haldwani","Nanital","Bhawali","Bhimtal"];
  const [location,setLocation]=useState(["Block","Katgariya","Mukhani"]);
  const [avlLocation,setAvlLocation]=useState(false);
  const onCourseChangeHandler= (e) =>{
    //console.log(e.target.value);
    if(e.target.value==="BTech")
    {
      setAvlBranch(false);
      setBranch(['Computer Science','Mechanical']);
      semUpdate([1,2,3,4,5,6,7,8]);
    }
    else  
    {  setAvlBranch(true);
      setBranch([]);
      semUpdate([1,2,3,4,5,6]);
    }
  }

  const onCityChangeHandler = (e) =>{
    if(e.target.value==="Haldwani")
    {
      setAvlLocation(false);
      setLocation(["Block","Katgariya","Mukhani"]);
    }
    else
    {
      setAvlLocation(true);
      setLocation([]);
    }
    console.log(e.target.value);
  }

  return (
    <div>
      <NavHome/>
      <main id="main">
	<form method="post">
	<section id="hero" className="hero d-flex align-items-center">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="assets/img/gehu_signup2.jpeg"
                alt="Sample pic" className="img-fluid"
                style={{borderTopLeftRadius:'.25rem',borderBottomLeftRadius:'.25rem', height:'100%'}}/>
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black" style={{fontWeight:'800'}}>
                <h3 className="mb-5 text-uppercase" style={{fontWeight:'900', fontSize:'28px', textAlign:'center'}}>Student Registration form</h3>
				
                <div className="form-outline mb-4">
					<label className="form-label" htmlFor="form3Example8">Student Id</label>
                  <input type="number" id="student_id" name="student_id"className="form-control form-control-lg" required />
                </div>
				
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">First name</label>
						<input type="text" id="sfname" name="sfname" className="form-control form-control-lg" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1n">Last name</label>
						<input type="text" id="slname" name="slname" className="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
				<div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">Password</label>
						<input type="password" id="spass" name="spass" autoComplete='off' className="form-control form-control-lg" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1n">Re-Enter Password</label>
						<input type="password" id="srepass" name="srepass" autoComplete='off' className="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
				
				<div className="form-outline mb-4">
					<label className="form-label" htmlFor="form3Example8">Choose</label>
					<select id="schoose" name="schoose" className="form-select form-control form-control-lg">
            <option key={0}>Day Schollar</option>
            <option key={1}>Hosteller</option>
          </select>
                </div>
				
				
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1m">City</label>
						<select id="scity" name="scity" className="form-select form-control form-control-lg" onChange={onCityChangeHandler} >
						{
              city.map((option,index)=>{
                   return <option key={index}>
                      {option}
                  </option>
              })
            }
            </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
						<label className="form-label" htmlFor="form3Example1n">Location</label>
            <select id="slocation" name="slocation" className="form-select form-control form-control-lg"disabled={avlLocation} >
            {
              location.map((option,index)=>{
                return <option key={index}>
                  {option}
                </option>
              })
            }
					  </select>
					</div>
                  </div>
                </div>

                <div className="form-outline mb-4">
					<label className="form-label" htmlFor="form3Example99">Course</label>
					<select id="scourse" name="scourse" className="form-select form-control form-control-lg" onChange={onCourseChangeHandler}>
						{
              course.map((option,index)=>{
                return <option key={index}>
                  {option}
                </option>
              })
            }
					</select>
				</div>
				
				<div className="form-outline mb-4">
					<label className="form-label" htmlFor="form3Example99">Branch</label>
					<select id="sbranch" disabled={avlbranch} name="sbranch" className="form-select form-control form-control-lg">
            {
                branch.map((option,index)=>{
                  return <option key={index}>
                    {option}
                  </option>
                })
            }
          </select>
				</div>

				
                <div className="form-outline mb-4">
					<label className="form-label" htmlFor="form3Example97">Sem</label>
					<select id="ssem" name="ssem" className="form-select form-control form-control-lg">
					{
          	sem.map((option,index)=>{
                return <option key={index}>
                  {option}
                </option>
            })
          }  
					</select>
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
    </div>
  )
}

export default StudentSignUp
