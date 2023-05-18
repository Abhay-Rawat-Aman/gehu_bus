import React from 'react'
import Footer from './Footer'
import HomePage from './HomePage'
import NavHome from './NavHome'

const Main = () => {

  return (
    <div>
      <NavHome/>
      <HomePage mainContent="Your Lightning Fast Delivery Partner" content="
            Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit"/>
      <Footer/>
    </div>
  )
}

export default Main
