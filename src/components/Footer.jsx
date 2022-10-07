import React from 'react'
import '../style/Footer.css'

function Footer() {
  return (
    <footer className="row  py-5 my-5 border-top  bg-grey border-primary" >


      <div className="col mb-3">
        <div className="d-flex flex-row mb-3 border-success">
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img src={require(`../img/logo.png`)} alt="" width="120" className="d-inline-block align-text-top" />
          </a>
          <p className="text-muted text">Story Of Startup is one of the leading online platforms for entrepreneurs. Read latest startup insights, find the best service providers, share your startup story, and more.</p>
        </div>
        <div className='m-5 px-3'>
          <p className='mx-3'><i class="bi bi-telephone"></i> <a href="" className='text-decoration-none '>+91 9876543210</a></p>
          <p className='mx-3'><i class="bi bi-envelope"></i> <a href="" className='text-decoration-none '>harshalskahar389@gmail.com</a></p>
        </div>

      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Share</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Story</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Share</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Story</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Share</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Story</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer