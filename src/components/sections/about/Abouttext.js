import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutText extends Component {
    render() {
        return (
            <section className="aboutus section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="history-title mb-md-40">
                                <h2 className="text-light-black">Smart Start USA is the  <span className="text-light-green">Best Educational Brand!</span></h2>
                                <p className="text-light-white">Smart Start USA is an innovative after-school program designed for elementary, middle, and high school students. We offer interactive online courses that prepare students to excel in major academic areas and successfully conquer national academic contests, Regents Examinations, SAT, ISEE, and other essential assessments.</p>
                                <p className="text-light-white">
                                    Our classes are led by a team of highly qualified licensed teachers with an extensive academic background and mastery of virtual education. Smart Start USA inspires students to become future leaders, lifelong learners, and critical thinkers responsible for their own choices in life. Our curriculum is academically diverse, rigorous, and helps our students stay motivated while achieving their individual academic goals. In addition, we provide various educational resources such as testing materials, educational software, etc., to meet the unique needs of our learners. Therefore, all our students achieve remarkable test scores and shoot to the top of their classes.</p>
                                <p className="text-light-green">Join us today and make Your Smart Start on the road to success!</p>
                                <Link to="/about" className="btn-solid with-line btn-big mt-20"><span>Learn More <i className="fas fa-caret-right" /></span></Link>
                            </div>
                        </div>



                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xs-20">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about1.jpg"} className="img-fluid full-width" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xl-20">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about2.jpg"} className="img-fluid full-width" alt="img" />
                                    </div>
                                    <div className="histry-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about3.jpg"} className="img-fluid full-width" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutText;