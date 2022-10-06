import React from 'react'
import Footer from './Footer'
import Latest from './Latest'
import MSuccessor from './M_Successor'


const Hero = () => {
    return (
        <div className="Hero container mt-4">
           <img src={require("../img/bg.jpg")} alt="" className="img-fluid opacity-25 z-1 position-relative"/>

           <div class="carousel-caption z-2 text-dark position-absolute ">
            <h1 className='fw-semibold '>For Startups & Entrepreneurs Who Want to Inspire Others</h1>
            <p className='fs-4'>Find latest startup insights, read growth case studies, share your story, and do a lot more with KeeVurds. </p>
            <p><a class="" href="">Do You Have a Story to Share?</a></p>
          </div>


          <Latest></Latest>
          <MSuccessor></MSuccessor>
          <Footer></Footer>
        </div>

      
    )
}

export default Hero