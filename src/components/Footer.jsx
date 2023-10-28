import '../css/footer.css'
import facebook from '../assets/facebook.png'
import React from 'react';


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='sb__footer section__padding'>
                    <div className='sb__footer-links'>
                        <div className='sb__footer-links-div'>
                            <h4>
                                For Business
                            </h4>
                            <a href="#">
                                <p>Employer</p>
                            </a>
                            <a href="#">
                                <p>health plan</p>
                            </a>
                            <a href="#">
                                <p>Individual</p>
                            </a>

                        </div>

                        <div className='sb__footer-links-div'>
                            <h4>
                                Resources
                            </h4>
                            <a href="#">
                                <p>Resource one </p>
                            </a>
                            <a href="#">
                                <p>Resource two</p>
                            </a>
                            <a href="#">
                                <p>Resource three</p>
                            </a>

                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>
                                Company
                            </h4>
                            <a href="#">
                                <p>Resource one </p>
                            </a>
                            <a href="#">
                                <p>Resource two</p>
                            </a>
                            <a href="#">
                                <p>Resource three</p>
                            </a>

                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>
                                Coming Soon
                            </h4>
                            <div className='socialmedia'>
                                <p><img src={facebook} alt="" /></p>
                                <p><img src={facebook} alt="" /></p>
                                <p><img src={facebook} alt="" /></p>
                                <p><img src={facebook} alt="" /></p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='sb__footer-below'>
                        <div className='sb_footer-copyright'>
                            <p>
                                @{new Date().getFullYear()} Ali Keskin.
                            </p>
                        </div>
                        <div className='sb__footer-below-links'>
                            <a href="">
                                <div>
                                    <p>
                                        Terms& Conditions
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div>
                                    <p>
                                        Privacy
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div>
                                    <p>
                                        Security
                                    </p>
                                </div>
                            </a>
                            <a href="">
                                <div>
                                    <p>
                                        Cookie declaration
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Footer