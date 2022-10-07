import React from 'react'

const Shareyour = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center text-align-center flex-column" data-aos="fade-up">
                <h1 className="text-glow text-muted">Share Your Story</h1>
                <form>

                   
                        <div className="col">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                        </div>
                        <div className="col">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Startup Name</label>
                            <input type="text" className="form-control" placeholder="Startup Name" aria-label="First name" required />

                        </div>

                    
                    <div className="col ">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail3" placeholder='email-id' required />
                       
                    </div>


                    <div className="my-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                            placeholder="Share Your Story" required></textarea>
                    </div>


                    <input type="file" id="myFile" name="filename" />
                    <br />


                    <button type="submit" className=" btn btn-outline-primary my-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Shareyour