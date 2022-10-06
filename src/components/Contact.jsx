import React from 'react'

const Contact = () => {
  return (
    <div>

<div className="container d-flex justify-content-center text-align-center flex-column"data-aos="fade-up">
        <h1 className="my-sm-5 my-sm-5- text-glow text-muted">Contact Us</h1>
        <form>
            <h5 className="text-muted">Let's start a conversion</h5>
            <div className="row g-3 my-4">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" required/>
                </div>
            </div>


            <div className="my-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Let's start a conversion" required></textarea>
            </div>
            <button type="submit" className=" btn btn-outline-primary">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact