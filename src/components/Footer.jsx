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
                                Front-end techniques
                            </h4>
                            <a href="#">
                                <p>HTML</p>
                            </a>
                            <a href="#">
                                <p>CSS (vanilla)</p>
                            </a>
                            <a href="#">
                                <p>Javascript</p>
                            </a>
                            <a href="#">
                                <p>React</p>
                            </a>

                        </div>

                        <div className='sb__footer-links-div'>
                            <h4>
                                Back-End techniques
                            </h4>
                            <a href="#">
                                <p>Java </p>
                            </a>
                            <a href="#">
                                <p>Spring Boot</p>
                            </a>
                            <a href="#">
                                <p>PostgreSQL</p>
                            </a>
                            <a href="#">
                                <p>Hibernate</p>
                            </a>


                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>
                                Contact
                            </h4>
                            <a href="#">
                                <p>LinkedIN</p>
                            </a>
                            <a href="#">
                                <p>E-mail</p>
                            </a>
                            <a href="#">
                                <p>Phone number: +6 123 456 78</p>
                            </a>

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