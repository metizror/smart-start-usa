import React, { Component, Fragment } from 'react';
// import instagram from '../../data/instagram.json';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const settings = {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1500: {
            slidesPerView: 8,
        },
    }
};

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">

                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-contact">
                                    <div className="logo mb-xl-20 footer-logo">
                                        <Link to="#">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/logo/newlogo.png"} className="img-fluid" alt="img" />
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md col-lg-4 col-md-4 col-sm-6">
                                <div class="row">
                                    <div class="col-lg-4">

                                    </div>
                                    <div class="col-lg-8">
                                        <div className="footer-links">
                                            <h6 className="text-custom-white">My Account</h6>
                                            <ul>
                                                <li><Link to="/login" className="text-white fw-500">Login</Link>
                                                </li>
                                                <li><Link to="/register" className="text-white fw-500">Signup</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <h6 className="text-custom-white">Contact info</h6>
                                    <ul className="contact-info">
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-timer" /></span>
                                                Monday-Saturday  3:00 PM - 6:30PM
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-mail" /></span>
                                                school@smartstartus.com</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-call" /></span>
                                                (917) 268 01970 </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright bg-black">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="payment-logo mb-md-20">
                                    <div className="payemt-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/footer-bottom-img.png"} alt="img" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 text-center medewithlove align-self-center"> <Link to="#" className="text-custom-white">Made
                                with Real <i className="fas fa-heart" /> Yourwebsite</Link>
                            </div> */}
                            {/* <div className="col-lg-4">
                                <div className="copyright-text"> <span className="text-white">© <Link to="#" className="text-white">Yourwebsite</Link> -
                                    2021 | All Right Reserved</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;