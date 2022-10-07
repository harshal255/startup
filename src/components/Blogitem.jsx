import React from 'react'
import '../style/Blogitem.css'
import { NavLink } from 'react-router-dom'

const Blogitem = ({ title, storyimg, story }) => {
    return (
        <div className="col" data-aos="zoom-in">
            <div className="card shadow-sm">
                <h4 className='text-center my-4'><b>{title} </b> </h4>
                <NavLink to='/bigstory' className="nav-link active text-primary text-decoration-underline" aria-current="page"
                        >

                <img src={require(`../img/Story/${storyimg}.jpg`)} alt="" classNameName="bd-placeholder-img card-img-top" id='storyimg' />

                </NavLink>


                <div className="card-body"
                    id='card'>
                    <p className="card-text" id='card-text'>{story}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <p><a className="" href="">View more</a></p> */}
                        <NavLink to='/bigstory' className="nav-link active text-primary text-decoration-underline" aria-current="page"
                        >View More</NavLink>
                    </div>
                </div>
            </div>
        </div>

      
    )
}

export default Blogitem