import React from 'react'
import Footer from './Footer'
import NavHome from './NavHome'
import BreadCrumbs from './BreadCrumbs'

const Price = () => {
    const city_ds=[
        {"city":"Haldwani","price":10000},
        {"city":"Bhimtal","price":4000}
    ]
    const city_hs=[
        {"city":"Haldwani","price":100},
        {"city":"Bhimtal","price":20}
    ]
    
  return (
    <>
    <NavHome/>
    <BreadCrumbs heading='Price' name='Price'/>
    <section id="team" className="team">
    <div className='container'>
        
        <div className="section-header" style={{marginTop:'-65px'}}>
          <span>Day Schollar</span>
          <h2>Day Schollar</h2>
        </div>

            <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    city_ds.map((option,index)=>{
                        return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{option.city}</td>
                            <td>{option.price}</td>
                        </tr>
                        )
                    })
                }                    
            </tbody>
        </table>
    </div>

    <div className='container'>
        
        <div className="section-header">
          <span>Hosteller</span>
          <h2>Hosteller</h2>
        </div>

            <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    city_hs.map((option,index)=>{
                        return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{option.city}</td>
                            <td>{option.price}</td>
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

export default Price
