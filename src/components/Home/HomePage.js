import React from 'react'
import CountUp from 'react-countup'
const HomePage = (props) => {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-between">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h2 data-aos="fade-up">{props.mainContent}</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            {props.content}
          </p>

          <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
            <input type="text" className="form-control" placeholder="ZIP code or CitY" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={32} duration={3} delay={1}/>
              <p>Buses</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={100} duration={3} delay={1}/>
              <p>Day Scholler</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={300} duration={3} delay={1}/>
              <p>Hostels</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
              <CountUp start={0} end={20} duration={3} delay={1}/>
              <p>Workers</p>
              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img style={{height:'350px',width:'750px'}}src="assets/img/gehu_main.png" className="img-fluid mb-3 mb-lg-0" alt=""/>
        </div>

      </div>
    </div>
  </section>
  
    </div>
  )
}

export default HomePage
