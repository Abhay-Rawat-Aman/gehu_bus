import React,{useEffect, useState} from 'react'
import stylex from './ChooseBus.module.css'
import { AlternateEmail } from '@mui/icons-material';
const ChooseBus = () => {

    const [data,setData] = useState([]);
    const [location,setLocation] = useState([]);
    const [locationValid,setLocationValid] = useState(false);
    const [bus_no,setBus_no] = useState([]);
    const [busNoValid,setBusNoValid] = useState(true);
    const [choosebus,setChooseBus] = useState({
      student_id:localStorage.getItem('id'),
      stop_name:"",
      bus_number:"",
    });

    let lct = [];

    useEffect(() => {
        loadData();
        loadLocation();
    }, []);

    const loadLocation = async()=> {
      const response = await fetch("http://localhost:4000/api/studentds/selectStop",{
    method:'POST',headers:{
      'Content-Type':'application/json',
      'auth-token':localStorage.getItem('token')
    },
  });
  const json = await response.json();
  lct=json.stp;
  setLocation(json.stp);
  }

  const loadBusNo = async() =>{
    const response = await fetch("http://localhost:4000/api/studentds/selectBusByStops",{
    method:'POST',headers:{
      'Content-Type':'application/json',
      'auth-token':localStorage.getItem('token')
    },
    body:JSON.stringify({stop_name:'Block'})  
  });
  const json = await response.json();
  let ll = [];
  for(let l = 0;l<json.bus_details.length;l++)
    ll.push(json.bus_details[l].collage_bus_no);
  //console.log(ll);
  setBus_no(ll);
}
    
    const loadData = async()=> {
        const response = await fetch("http://localhost:4000/api/priceList",{
      method:'POST',headers:{
        'Content-Type':'application/json',
      },
    });
    const json = await response.json();
    let place = []
    for(let i=0;i<json.val.length;i++)
      place.push(json.val[i].city);
    setData(place);
    }

    const ChangeCity =(e) =>{
      console.log(e.target.value);
      if(e.target.value!=='Haldwani')
      {
        setLocationValid(true);
        setLocation([]);
      }    
      else
      {
        loadLocation();
        setChooseBus({...choosebus,stop_name:e.target.value});
        console.log(choosebus);
        setLocationValid(false);
      }
    }
    const ChangeLocation = (e) =>{
      console.log(e.target.value);
      loadBusNo();
      setBusNoValid(false);
    }
    const onFormSubmit = ()=>{
      console.log('aman');
      alert('aman');
    }
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-center">
          
		  <form className={`container pb-1 ${stylex.chooseBusOuterBox}`} style={{'backgroundColor':'#0e1d34'}} onSubmit={onFormSubmit}>
            <h3 className="mt-4 mb-3" style={{color:'white'}}><center>Enter Your Details</center></h3>
            <br/>

            <div className="input-group mb-3">
              <input className={`${stylex.chooseBusInputBox}`} style={{border:'none'}} type="text" disabled value="Abhay Rawat" />
            </div>


            <div className="input-group mb-3">
              <select className={`${stylex.chooseBusInputBox}`} onChange={ChangeCity}>
                {
                  data.map((element, index)=>{
                    	return(
                        <option className={`${stylex.chooseBusOption}`} key={index} value={element}>{element}</option>        
                      )
                    })
                    
                }
                {/* <option className={`${stylex.chooseBusOption}`}>Haldwani</option>
                <option className={`${stylex.chooseBusOption}`}>Bhimtal</option> */}
              </select>
            </div>


            <div className="input-group mb-3">
              <select className={`${stylex.chooseBusInputBox}`} disabled={locationValid} onChange={ChangeLocation}>
                {
                  location.map((option,index)=>{
                    return (
                      <option className={`${stylex.chooseBusOption}`} key={index}>{option}</option>
                    )
                  })
                }
                {/* <option className={`${stylex.chooseBusOption}`}>Katgariya</option>
                <option className={`${stylex.chooseBusOption}`}>Block</option>
                <option className={`${stylex.chooseBusOption}`}>Kusumkhera</option> */}
              </select>
            </div>

            <div className="input-group mb-3">
              <select className={`${stylex.chooseBusInputBox}`} disabled={busNoValid}>
                {
                  bus_no.map((option,index)=>{
                    return (
                      <option className={`${stylex.chooseBusOption}`} key ={index}>{option}</option>      
                    )
                  })
                }
                {/*<option className={`${stylex.chooseBusOption}`}>Select Your Bus</option>
                 <option className={`${stylex.chooseBusOption}`}>21</option>
                <option className={`${stylex.chooseBusOption}`}>31</option> */}
              </select>
            </div>

            <div className="input-group">
              <input className={`btn btn-primary mt-3 mb-5 ${stylex.chooseBusSubmitButton}`} type="submit" />
            </div>

          </form>

        </div>

      </div>

    </div>

  </section>

    </div>
  )
}

export default ChooseBus
