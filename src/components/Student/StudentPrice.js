import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../Home/BreadCrumbs'
import Footer from '../Home/Footer'
import NavStudent from './NavStudent'
const StudentPrice = () => {
    const [price,setPrice] = useState([]); 
    // [
    //     {"city":"haldwani",price:10000},
    //     {"city":"bhimtal",price:5000}
    // ]

    useEffect(() => {
        loadData();
     }, []);

     const loadData = async()=> {
        const response = await fetch("http://localhost:4000/api/priceList",{
      method:'POST',headers:{
        'Content-Type':'application/json',
      },
    });
    const json = await response.json();
    let prc=[];
    for(let i=0;i<json.val.length;i++)
        prc.push({city:json.val[i].city,price:json.val[i].price});
    setPrice(prc);
    }

  return (
    <div>
        <NavStudent/>
        <BreadCrumbs heading="Price" name="Price"/>
        <section id="team" className="team">

    <div className='container'>
        
        
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
                    price.map((option,index)=>{
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
    </div>
  )
}

export default StudentPrice
