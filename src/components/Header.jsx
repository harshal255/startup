import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Header.css';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light sticky-top-1 border-bottom " id="nav">
                <div className="container-fluid">

                    <NavLink to='/' className="navbar-brand" > <img src={require(`../img/logo.png`)} alt="" width="100" class="d-inline-block align-text-top" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active fs-5" aria-current="page"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/sharestory' className="nav-link active fs-5" aria-current="page"
                                >Share</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/startups' className="nav-link active fs-5" aria-current="page" > Story</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link active fs-5" aria-current="page" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link active fs-5" aria-current="page" >Contact US</NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form> */}
                        <div className="mx-2 my-2">

                            <button type="button" className="btn btn-outline-secondary mx-1" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Login
                            </button>
                            <button type="button" className="btn btn-outline-secondary mx-1" data-bs-toggle="modal" data-bs-target="#signupModal">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* for sigup */}

            <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="signupModalLabel">Get Your Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>

                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input className="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                                </div> */}
                                <div>
                                    Alredy Have an Account?
                                    <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal"
                                        data-bs-target="#loginModal">
                                        Login
                                    </button>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                    <button type="button" className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* for login */}

            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bolder" id="loginModalLabel">Login to your Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                </div>


                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input className="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                                </div> */}

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                                    <button type="button" className="btn btn-primary">Login</button>
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