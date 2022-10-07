import React from 'react'
import Blogitem from './Blogitem'

const Latest = () => {
    return (
        <div className='my-5'>
            <hr />
            <h4 className='text-center my-4'>Latest Successor Startups</h4>
            <hr />

            <div className="container">
                <div className="album py-2 ">
                    <div className="container ">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">



                            <Blogitem title="Amazon Startup Story" story="Jeff Bezos quit his job at an investment bank in 1994 and moved to Seattle, Washington, to open a virtual bookstore. Working out of his garage with a handful of employees, Bezos began developing the software for the site, which he called Amazon.com." storyimg="4"></Blogitem>


                            <Blogitem title="Startup & History of Tesla Cars" story="Martin Eberhard and Marc Tarpenning launched Tesla (as Tesla Motors) on January 1, 2003, in San Carlos, California. After General Motors recalled all of its EV1 electric cars in 2003, the founders were " storyimg="5"></Blogitem>


                            <Blogitem title="Google Startup story" story="In 1995, two Stanford University computer science students, Larry Page and Sergey Brin, began working on a computer program called BackRub - a search engine that leveraged backlink analysis to track and record data on the internet. " storyimg="6"></Blogitem>




                        </div>
                    </div>
                    <nav aria-label="Page navigation example " className='mt-5'>
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Latest