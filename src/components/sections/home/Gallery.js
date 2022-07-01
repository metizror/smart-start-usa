import React from 'react';
import { Link } from 'react-router-dom';
import Popuphelper from '../../../helper/popuphelper';

class Gallery extends Popuphelper {
    render() {
        return (
            <section className="masonary-gallery-sec">
                <div className="container-fluid no-padding">
                    <div className="row magnific-gallery">
                        <div className="col-lg-6">
                            <div className="video-box full-height">
                                <div className="video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <div className="col-xl-8 col-lg-6" key={Math.random()}>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/gallery/f24.jpg"} className="image-fit" alt="#" />
                                        </div>

                                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/gallery/thisisimage1.jpg"} className="image-fit" alt="#" /> */}
                                        {/* <div className="video-inner video-btn-wrapper"> <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube"><i className="pe-7s-play" /></a></div> */}
                                        <div className='text-Image'> <h6 className="text-dark-red">Smart Start USA has a team of highly professional teachers who graduated the best colleges in America like Harvard, Yale, Princeton, and Columbia. Moreover, all our teachers have more then 25 years of experience.</h6>

                                            <h6 className="text-dark-red"> Smart Start USA is the best educational brand! We provide our students with fundamental knowledge which prepares them to tackle most tests, competitions, quizzes, and assessments with amazing scores! Our program includes all crucial subjects ranging from U.S. History to Math. </h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box full-height">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/f25.jpg"} className="image-fit" alt="#" />
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/gallery/thisisimage1.jpg"} className="image-fit" alt="#" /> */}
                                        {/* <div className="video-inner video-btn-wrapper"> <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube"><i className="pe-7s-play" /></a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g26.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g26.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g27.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g27.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g28.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g28.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g29.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g29.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;