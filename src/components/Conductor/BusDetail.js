import React, { useEffect, useState } from 'react'
import NavConductor from './NavConductor'
import ConductorSidebar from './ConductorSidebar'

const BusDetail = () => {
    const data = JSON.parse(localStorage.getItem('bus_details'));
    const [seatBookDetails,setSeatBookDetails] = useState(()=>{new Map()});

    useEffect(()=>{
        booked();
    },[])

    const booked = async() =>{
        //fetch the data of seats which are already booked
        console.log(data._id);
        const response = await fetch("http://localhost:4000/api/seeBookedSeatConductor",{
            method:'GET',headers:{
                'Content-Type':'application/json',
                'bus_id':data._id,
                'auth-token':localStorage.getItem('token')
            }
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                const l= new Map();
                for(let i=0;i<data.reserve_seat.length;i++)
                l.set(data.reserve_seat[i].seat_no,[data.reserve_seat[i]]);
                setSeatBookDetails(l);
                //console.log(seatBookDetails.get(5));
                //console.log(l.get(10));
                //console.log(data.reserve_seat[0].seat_no);
                //console.log(seatBookDetails);
            });
    }
    

    const fun=[1,2,3,4,5,6,7];
    const [mystyle,setMyStyle] = useState({display:'none'});
    const clickHandler = (e) =>{
        setMyStyle({fontSize:'30px',margin:'auto',width:'500px',marginTop:'50px',marginBottom:'50px',display:'block'});
    }
  return (
    <div className="home">
    <ConductorSidebar/>
    <div className="homeContainer">
     <NavConductor/>

     
     <h2 style={{margin:'15px'}}><center>Bus No: {data.collage_bus_no}
        </center></h2>
     <div className="listContainer">
        
            <table className="table">
            <tbody>
            
            <tr >
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index} style={{'paddingBottom':'20px','paddingLeft':'40px'}}>
                            {seatBookDetails.get(index+7)?
                            <>
                            <button type="submit" className="btn" value ={index}>
                            <img src="../assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'90px'}}/>
                            </button>
                            </>
                            :
                            <>
                            <button type="submit" className="btn" value ={index}>
                            <img src="../assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            }
                        </td>
                    )
                })
            }
            </tr>


            </tbody>
        </table>

        </div>
        <div className="listContainer" style={mystyle}>
            <div style={{paddingBottom:'30px'}}><center>Details of Student</center></div>
            <div style={{fontSize:'20px'}}>
            <input type="text" value="Name" style={{border:'none',fontSize:'20px'}} disabled/><input type="text" value="Aman" style={{border:'none',fontSize:'20px'}} disabled/>
            </div>
            <div style={{fontSize:'20px'}}>
            <input type="text" value="Course" style={{border:'none',fontSize:'20px'}} disabled/><input type="text" value="Aman" style={{border:'none',fontSize:'20px'}} disabled/>
            </div>
            <div style={{fontSize:'20px'}}>
            <input type="text" value="Sem" style={{border:'none',fontSize:'20px'}} disabled/><input type="text" value="Aman" style={{border:'none',fontSize:'20px'}} disabled/>
            </div>
            
            <div>
                <center>
                <button className="btn btn-primary" style={{fontSize:'20px'}}> Verify </button>
                </center>
            </div>
        </div>
    </div>

 </div>

  )
}

export default BusDetail

{/* <section id="team" className="team">
    <div className='container'>
        
        <div className="section-header" style={{marginTop:'-65px'}}>
          <span>Your Bus No. is 12</span>
          <h2>Your Bus No. is 12</h2>
        </div>

            <table className="table">
            <tbody>
            <tr>
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index}>
                            <button type="submit" className="btn" value ={index}>
                            <img src="../assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                        </td>
                    )
                })
            }
            </tr>

            </tbody>
        </table>
    </div>
    </section> */}
