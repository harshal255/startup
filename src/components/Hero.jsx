import React from 'react'
import Footer from './Footer'
import Latest from './Latest'
import Slides from './Slides'
// import MSuccessor from './M_Successor'
// import { NavLink } from 'react-router-dom'


const Hero = () => {
  return (

    <div className="Hero container mt-4">
      <Slides></Slides>
      {/* <NavLink to='/sharestory' className="nav-link active text-primary text-decoration-underline" aria-current="page"
      > <button class="btn btn-primary" type="button">Share Your Story<i class="bi bi-arrow-right-circle mx-2"></i></button></NavLink> */}
      {/* <img src={require("../img/bg.jpg")} alt="" className="img-fluid opacity-25 z-1 position-relative" />

      <div class="carousel-caption z-2 text-dark position-absolute ">
        <h1 className='fw-semibold '>For Startups & Entrepreneurs Who Want to Inspire Others</h1>
        <p className='fs-4'>Find latest startup insights, read growth case studies, share your story, and do a lot more with KeeVurds. </p>
       
        <NavLink to='/sharestory' className="nav-link active text-primary text-decoration-underline" aria-current="page"
        > <button class="btn btn-primary" type="button">Share Your Story<i class="bi bi-arrow-right-circle mx-2"></i></button></NavLink>

      </div> */}





      <Latest></Latest>


      {/* <NavLink to='/startups' className="nav-link active text-primary text-decoration-underline" aria-current="page"
        > <button type="button" class="btn btn-primary position-relative top-100 start-50 translate-middle mt-1">Check Out All The Stories<i class="bi bi-arrow-right-circle mx-2"></i></button></NavLink> */}
      {/* <MSuccessor></MSuccessor> */}

      {/* <NavLink to='/startups' className="nav-link active text-primary text-decoration-underline" aria-current="page"
        >  <button type="button" class="btn btn-primary position-relative top-100 start-50 translate-middle mt-5">Check Out All The Stories<i class="bi bi-arrow-right-circle mx-2"></i></button></NavLink> */}
      <Footer></Footer>
    </div>


  )
}

export default Hero