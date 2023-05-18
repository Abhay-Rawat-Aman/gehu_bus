import React, {useState} from 'react'
import Footer from '../Home/Footer'
import NavHome from '../Home/NavHome'
import { useHistory } from 'react-router-dom'

const StudentLogin = () => {

  
  const history=useHistory();

  const [cedentials,setCedentials] = useState({
    student_id:"",
    password:""
  });

  const onChange = (e) => {
    setCedentials({...cedentials,[e.target.name]:e.target.value})
  }

  const entry_bus = async(student_id) =>{
    const response = await fetch("http://localhost:4000/api/studentds/chooseBus",{
      method:'POST',headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);
    return json.status;
  }
  const formSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/studentds/login",{
      method:'POST',headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({student_id:cedentials.student_id,password:cedentials.password})
    });
    const json = await response.json();
    console.log(json.statusStudentDS);
    if(json.statusStudentDS==false)
      alert(json.message);
    else
    {
      localStorage.setItem("token",json.token);
      localStorage.setItem("name",json.name);
      localStorage.setItem("id",json.id);
      //localStorage.setItem("student_id",json.student_id);
      if(entry_bus(json.student_id)==true)
      {
          history.push('/student_home');
      }
      else
      history.push('/choose_bus');
    }
    //console.log(json.error);
  }

  return (
    <>

    <NavHome/>

      <main id="main">
		
        <form method="post" onSubmit={formSubmit}>
        <section id="hero" className="hero d-flex align-items-center">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src="assets/img/main.png" alt="Sample pic" className="img-fluid" style={{borderTopLeftRadius: '.25rem',borderBottomLeftRadius:'.25rem', height:'100%', width:'100%'}} />
                </div>
                
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black" style={{fontWeight:'800'}}>
                    <h3 className="mb-5 text-uppercase" style={{fontWeight:'900',fontSize:'28px',textAlign:'center'}}>Student Login Form</h3>
    
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example8">Student Id</label>
                      <input type="number" id="student_id"  autoComplete='off' onChange={onChange} className="form-control form-control-lg" name="student_id" required />
                    </div>
                    
                    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example8">Password</label>
                      <input type="password" id="password" autoComplete='off'  onChange={onChange} className="form-control form-control-lg" name="password" required />
                    </div>
                    
                    
                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-light btn-lg">Reset</button>
                      <input type="submit" className="btn btn-warning btn-lg ms-2" name="login" value="Login"/>
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

export default StudentLogin
