import React from 'react'

const Footer = () => {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">

            <span className="mb-3 mb-md-0 ">© 2022 Story Of Startup, Inc. All rights reserved.</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3  animation"><a className="" href=""><i
              className="bi bi-github"></i></a></li>
            <li className="ms-3  animation"><a className="" href=""><i
              className="bi bi-linkedin"></i></a></li>
            <li className="ms-3  animation"><a className="" href=""><i
              className="bi bi-instagram"></i></a></li>
            <li className="ms-3  animation"><a className=""
              href=""><i className="bi bi-twitter"></i></a></li>
          </ul>
        </footer>
      </div>
  )
}

export default Footer






