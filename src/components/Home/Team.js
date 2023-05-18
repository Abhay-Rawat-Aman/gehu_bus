import React from 'react'
import NavHome from './NavHome'
import Footer from './Footer'
import BreadCrumbs from './BreadCrumbs'
import TeamMate from './TeamMate'

const Team = () => {
  return (
    <>
    <NavHome/>
    <BreadCrumbs heading="Our Team" name="Team" />

    <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="fade-up" data-aos-delay="100">
            <TeamMate img='AbhayHem.jpg' name='Abhay Rawat' title='MERN Devloper' para='I am MERN Stack Developer. I am Teaching Assistant ( DSA Mentor) in WeCode (Coding Club) '/>
            <TeamMate img='Saurabh6.jpg' name='Saurabh Bisht' title='Nahi Pata' para='Ayta nahi'/>
            <TeamMate img='Shubham.jpeg' name='Shubham Sharma' title='Web Devloper' para='Well versed with the knowledge of web development, I know how to change Coffee into Code'/>
            <TeamMate img='Devang.jpg' name='Devang Pant' title='Frontend Developer' para=''/>
        </div>

      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Team
