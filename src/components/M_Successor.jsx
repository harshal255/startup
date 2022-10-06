import React from 'react'

const M_Successor = () => {
  return (
    <div> 
    <hr />
    <h4 classNameName='text-center my-5'>Successful Startup Success Stories in India</h4>
    
    
    <hr className="featurette-divider "/>


        <div className="row featurette d-flex justify-content-center align-items-center" data-aos="fade-right">

            <div className="col-md-7 ">
                <h2 className="featurette-heading fw-normal ">Vijay Shekhar Sharma <span className="text-muted">founder & ceo of Paytm.</span></h2>
                <p className="lead ">Paytm started as a digital wallet in its initial days but has transformed into a completely new payment platform. The fintech service has emerged as the top fintech company even after facing fierce early competition from brands like Freecharge.</p>
                <p><a className="" href="">View more</a></p>
            </div>
            <div className="col-md-5">

            <img src={require(`../img/indsuccess/1.jpg`)} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                    height="500"/>

            </div>

        </div>


        <hr className="featurette-divider"/>

        <div className="row featurette d-flex justify-content-center align-items-center "data-aos="fade-left">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Sachin Bansal & Binny Bansal<span className="text-muted"> Founders</span></h2>
                <p className="lead ">The Walmart acquired ecommerce company Flipkart stands as the largest ecommerce platform in India. Today, the ecommerce platform has expanded its business horizons by foraying into the video streaming industry with Flipkart Originals.</p>
                <p><a className="" href="">View more</a></p>
            </div>
            <div className="col-md-5 order-md-1">

            <img src={require(`../img/indsuccess/2.jpg`)} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                    height="500" />

            </div>



        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette d-flex justify-content-center align-items-center "data-aos="fade-right">

            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1"> Nandan Reddy, Rahul Jaimini, & Sriharsha Majesty <span
                        className="text-muted">Founders</span></h2>
                <p className="lead ">The viral food delivery startup has marked itself as one of the inspirational stories of success that started in its Bengaluru neighborhood, where six delivery executives were covered by only 25 partner restaurants.</p>
                <p><a className="" href="">View more</a></p>
            </div>
            <div className="col-md-5">

            <img src={require(`../img/indsuccess/3.jpg`)} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                    height="500" />

            </div>

        </div>

        <hr className="featurette-divider"/></div>


  )
}

export default M_Successor