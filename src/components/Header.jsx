import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Header.css';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom ">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" >Story of Startups</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active " aria-current="page"
                                >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/startups' className="nav-link active " aria-current="page" > Startups</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link active " aria-current="page" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link active " aria-current="page" >Contact US</NavLink>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-secondary" type="submit">Search</button>
                        </form>
                        <div class="mx-2 my-2">

                            <button type="button" class="btn btn-outline-secondary mx-1" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Login
                            </button>
                            <button type="button" class="btn btn-outline-secondary mx-1" data-bs-toggle="modal" data-bs-target="#signupModal">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* for sigup */}

            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="signupModalLabel">Get Your Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>

                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input  class="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Show Password</label>
                                </div> */}
                                <div>
                                    Alredy Have an Account
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">
                                        Login
                                    </button>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                    <button type="button" class="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* for login */}

            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bolder" id="loginModalLabel">Login to your Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                </div>


                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input  class="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Show Password</label>
                                </div> */}

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                    <button type="button" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Header