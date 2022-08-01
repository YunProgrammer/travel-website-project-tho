import React from 'react'
import '../Testimonials/Testimonials.css'
import viewer1 from '../../images/girl.jpg'
import viewer2 from '../../images/dyesebel.png'
import viewer3 from '../../images/dyesebel.png'


const Testimonials = () => {
    return (
        <div className='testimonialSection'>
            <div className="testimonialTitle">
                <h2>Happy Customers</h2>
            </div>

            <div className="testimonials">
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src={viewer1} alt="" />

                        <div className="testimonialDetails">
                            <h4>Kishan Seth</h4>
                            <span>CEO - Sashan Web Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src={viewer2} alt="" />

                        <div className="testimonialDetails">
                            <h4>Rakesh Kumar</h4>
                            <span>CEO - Blockchain Inc.</span>
                        </div>
                    </div>
                </div>
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src={viewer3} alt="" />

                        <div className="testimonialDetails">
                            <h4>Darshan Grover</h4>
                            <span>Certified React Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;