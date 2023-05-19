import React, { useEffect, useState} from 'react'
import NavStudent from './NavStudent'
import Footer from '../Home/Footer'
import BreadCrumbs from '../Home/BreadCrumbs'
import { useHistory } from 'react-router-dom'

const Morning = () => {
    const fun=[1,2,3,4,5,6,7];
    const [seatBookDetails,setSeatBookDetails] = useState([]);
    const history = useHistory();
    useEffect(()=>{

        //timing
        const time2 = '20:45:00';
        const [hours2, minutes2, seconds2] = time2.split(':');
        const date3 = new Date();
        const date2 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate(), +hours2, +minutes2, +seconds2);
        if(date3>=date2)
        {
            alert('Timing for morning Booking is 6am am to 7 am');
            history.push('./student_home');
        }
        //console.log(localStorage.getItem('bus_detials'));
        //console.log(date1,date2);
        others_booked();
    },[]);

    const others_booked = async() =>{
        //fetch the data of seats which are already booked
        const data = JSON.parse(localStorage.getItem('bus_detials'));
        const response = await fetch("http://localhost:4000/api/seeBookedSeatStudent",{
            method:'GET',headers:{
                'Content-Type':'application/json',
                'bus_id':data.bus,
                'auth-token':localStorage.getItem('token')
            }
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                setSeatBookDetails(data.rs);
            });
    }
    
    const bus_no=0;
    const selectSeat = async(e,value) =>{
        const cf =window.confirm("Your Seat no is "+value+" Want you to book the seat?");
        if(cf)
        {
            const data = JSON.parse(localStorage.getItem('bus_detials'));
            console.log(data._id);
            const response = await fetch("http://localhost:4000/api/studentds/selectSeat",{
            method:'POST',headers:{
                'Content-Type':'application/json',
                'bus_id':data.bus,
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({seat_no:value})
            });
            const json = await response.json();
            if(json.message)
                alert(json.message);
            //console.log(json);
            else
                others_booked();
        }
    }
    return (
    <>
    
    <NavStudent/>
    <BreadCrumbs heading="Book Morning Slot" name="Book Morning Slot"/>

    <section id="team" className="team">
    <div className='container'>
        
        <div className="section-header" style={{marginTop:'-65px'}}>
          <span>Your Bus No. is {bus_no}</span>
          <h2>Your Bus No. is {bus_no}</h2>
        </div>

            <table className="table">
            <tbody>
            <tr>
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index}>
                            {seatBookDetails.length!==0 && seatBookDetails.includes(index)?
                            <>
                            <button type="submit" className="btn" value ={index} onClick={e => selectSeat(e, index)} disabled>
                            <img src="assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            :
                            <>
                            <button type="submit" className="btn" value ={index} onClick={e => selectSeat(e, index)}>
                            <img src="assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            }
                        </td>
                    )
                })
            }
            </tr>

            <tr>
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index+7}>
                            {seatBookDetails.length!==0 && seatBookDetails.includes(index+7)?
                            <>
                            <button type="submit" className="btn" value ={index+7} onClick={e => selectSeat(e, index+7)} disabled>
                            <img src="assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            :
                            <>
                            <button type="submit" className="btn" value ={index+7} onClick={e => selectSeat(e, index+7)}>
                            <img src="assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            }
                        </td>
                    )
                })
            }
            </tr>

            <tr>
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index+14}>
                            {seatBookDetails.length!==0 && seatBookDetails.includes(index+14)?
                            <>
                            <button type="submit" className="btn" value ={index+14} onClick={e => selectSeat(e, index+14)} disabled>
                            <img src="assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            :
                            <>
                            <button type="submit" className="btn" value ={index+14} onClick={e => selectSeat(e, index+14)}>
                            <img src="assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            }
                        </td>
                    )
                })
            }
            </tr>

            <tr>
            {
                fun.map((option,index)=>{
                    return (
                        <td key={index+21}>
                            {seatBookDetails.length!==0 && seatBookDetails.includes(index+21)?
                            <>
                            <button type="submit" className="btn" value ={index+21} onClick={e => selectSeat(e, index+21)} disabled>
                            <img src="assets/img/seats/unpaid.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
                            </>
                            :
                            <>
                            <button type="submit" className="btn" value ={index+21} onClick={e => selectSeat(e, index+21)}>
                            <img src="assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
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
    </section>

    <Footer/>
    </>
)
}

export default Morning