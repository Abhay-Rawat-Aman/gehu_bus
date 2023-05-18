import React from 'react'
import { Link } from 'react-router-dom'

const TeamMate = (props) => {
  return (
    <>
    <div className="col-lg-3 col-md-6 d-flex">
            <div className="member">
              {
              //<img src={`assets/img/team/${props.img}`} className="img-fluid" alt="" />
              }
              <img src={`assets/img/team/${props.img}`} className="img-fluid" alt="" />
              <div className="member-content">
                <h4>{props.name}</h4>
                <span>{props.title}</span>
                <p>
                  {props.para}
                  {
                  //Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                  }
                </p>
                <div className="social">
                  <Link to=""><i className="bi bi-facebook"></i></Link>
                  <Link to=""><i className="bi bi-instagram"></i></Link>
                  <Link to=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default TeamMate
