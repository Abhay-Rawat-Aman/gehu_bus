import React from 'react'
import NavStudent from './NavStudent'
import Footer from '../Home/Footer'
import BreadCrumbs from '../Home/BreadCrumbs'

const StudentNotice = () => {
  return (
    <>
      <NavStudent/>
      <BreadCrumbs heading="Notice" name="Notice"/>

      <section id="team" className="team">

<div className='container'>
    
    
        <table className="table">
        <thead className="table-dark">
            <tr>
                <th>Notice</th>
            </tr>
        </thead>
        <tbody>
              <tr>
                <td>Aman</td>
              </tr>
              <tr>
                <td>Singh</td>
              </tr>                   
        </tbody>
    </table>
</div>

</section>

      <Footer/>
    </>
  )
}

export default StudentNotice
