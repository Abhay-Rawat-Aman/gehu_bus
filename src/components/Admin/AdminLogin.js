import React from 'react'
import Footer from '../Home/Footer'
import NavHome from '../Home/NavHome'
import { useHistory } from 'react-router-dom'

const AdminLogin = () => {
  
  const history=useHistory();
  
  const successFullLogin = () =>{
    console.log('click');
    alert('aman');
    history.push('/admin/home');
  }

  return (  
    <>
    <NavHome/>
    <main id="main">
		
	<form onSubmit={successFullLogin}>
	<section id="hero" className="hero d-flex align-items-center">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="assets/img/main.png" alt="Sample pic" className="img-fluid" style={{borderTopLeftRadius:'.25rem',borderBottomLeftRadius:'.25rem',height:'100%', width:'100%'}} />
            </div>
			
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black" style={{fontWeight:'800'}}>
                <h3 className="mb-5 text-uppercase" style={{fontWeight:'900',fontSize:'28px', textAlign:'center'}}>Admin Login Form</h3>

                <div className="form-outline mb-4">
				<label className="form-label" htmlFor="form3Example8">Admin Id</label>
                  <input type="text" id="admin_id" autoComplete='off' className="form-control form-control-lg" name="id" required />
                </div>
				
				
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example8">Password</label>
                  <input type="password" id="admin_pass" autoComplete='off' className="form-control form-control-lg" name="pass" required />
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

export default AdminLogin
