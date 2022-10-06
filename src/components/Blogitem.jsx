import React from 'react'
import '../style/Blogitem.css'

const Blogitem = ({ title, storyimg, story }) => {
    return (
        <div className="col" data-aos="zoom-in">
            <div className="card shadow-sm">
                <h4 className='text-center my-4'><b>{title} </b> </h4>

                <img src={require(`../img/Story/${storyimg}.jpg`)} alt="" classNameName="bd-placeholder-img card-img-top" id='storyimg' />


                <div className="card-body"
                    id='card'>
                    <p className="card-text" id='card-text'>{story}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p><a className="" href="">View more</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogitem