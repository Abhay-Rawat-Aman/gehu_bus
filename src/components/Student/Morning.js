import React from 'react'
import NavStudent from './NavStudent'
import Footer from '../Home/Footer'
import BreadCrumbs from '../Home/BreadCrumbs'

const Morning = () => {
    const fun=[1,2,3,4,5,6,7];
    return (
    <>
    <NavStudent/>
    <BreadCrumbs heading="Book Morning Slot" name="Book Morning Slot"/>

    <section id="team" className="team">
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
                            <button type="submit" className="btn">
                            <img src="assets/img/seats/vacant_new_seat.png" className="img-fluid" alt="" style={{height:'60px',width:'70px'}}/>
                            </button>
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