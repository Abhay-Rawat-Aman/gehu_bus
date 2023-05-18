import React from 'react'
import NavStudent from './NavStudent'
import BreadCrumbs from '../Home/BreadCrumbs'
import Footer from '../Home/Footer'

const RandT = () => {
  
  const RandT=[
      {"location":"Katgariya","morning":"7:10 AM","evening":"6:30 PM"},
      {"location":"Block","morning":"7:15 AM","evening":"6:25 PM"}
  ]

  return (
    <>
      <NavStudent/>
      <BreadCrumbs heading="Routes and Timing" name="Routes and Timing"/>
      <section id="team" className="team">
    <div className='container'>
        
        <div className="section-header" style={{marginTop:'-65px'}}>
          <span>Your Bus No. is 12</span>
          <h2>Your Bus No. is 12</h2>
        </div>

            <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>Morning Time</th>
                    <th>Evening Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    RandT.map((option,index)=>{
                        return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{option.location}</td>
                            <td>{option.morning}</td>
                            <td>{option.evening}</td>
                        </tr>
                        )
                    })
                }                    
            </tbody>
        </table>
    </div>
    

    </section>
    
      <Footer/>  
    </>
  )
}

export default RandT
