import React,{useState} from 'react'
import Footer from '../Home/Footer'
import NavHome from '../Home/NavHome'
import { useHistory } from 'react-router-dom';

const ConductorLogin = () => {
  const [cedentials,setCedentials] = useState({
    cuser:"",
    cpass:""
  });

  const history = useHistory();
  const onChange = (e) => {
    setCedentials({...cedentials,[e.target.name]:e.target.value})
  }

  const formSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/conductor/login",{
      method:'POST',headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({username:cedentials.cuser,password:cedentials.cpass})
    });
    const json = await response.json();
    //console.log(json);
    if(json.conductorSuccess==false)
      alert(json.message);
    else
    {
      localStorage.setItem("token",json.token);
      localStorage.setItem("bus_details",JSON.stringify(json.bus));
      
      
      // localStorage.setItem("name",json.name);
      //localStorage.setItem("id",json.id);
      //localStorage.setItem("bus_detials",JSON.stringify(json.bus_detials));//json.bus_detials._id;
      history.push('/conductor/home');
    }
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
                  <img src="assets/img/main.png"
                    alt="Sample pic" className="img-fluid"
                    style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', height:'100%', width:'100%'}} />
                </div>
                
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black" style={{fontWeight:'800'}}>
                    <h3 className="mb-5 text-uppercase" style={{fontWeight:'900',fontSize:'28px', textAlign:'center'}}>Conductor Login Form</h3>
    
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example8">Conductor Id</label>
                      <input type="email"onChange={onChange} id="cuser" className="form-control form-control-lg" name="cuser" required />
                    </div>
                    
                    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example8">Password</label>
                      <input type="password" onChange={onChange} id="cpass" autoComplete='off' className="form-control form-control-lg" name="cpass" required />
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

export default ConductorLogin
