import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import bannerdata from '../../../data/banner.json';
import HeaderComponent from '../../../helper/navhelper';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import Header from '../../layouts/Header';

// install Swiper components
SwiperCore.use([Navigation]);

const settings = {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 3500,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true
};
class Banner extends HeaderComponent {
    // componentDidMount() {
    // componentDidMount() {


    onTriggerdata = () => {
        this.props.scheduleToggleHanlder({ childData: true });
        // this.toggleModalFunc()
    };
    render() {
        return (
            <>
                <Swiper className="about-us-slider swiper-container p-relative slider-banner-1" {...settings} navigation>
                    {bannerdata.map((item, i) => (
                        <SwiperSlide className="swiper-slide slide-item" key={i}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image} className="img-fluid full-width" alt={item.subtitle} />
                            <div className="transform-center z-index-3">
                                <div className="container-fluid custom-container">
                                    <div className="row justify-content-center">
                                        <div className={"align-self-center " + item.position}>
                                            <div className={item.extraclass}>

                                                <h1 className="text-white fw-600" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                <p className="text-white fw-400">{item.text}</p>

                                                <button

                                                    // onClick={() => this.scheduleToggleFunc}
                                                    // ref={this.input}
                                                    // ref={(input) => (this.inputElement = input)}
                                                    onClick={this.onTriggerdata}
                                                    className={this.state.toggleModal ? "btn-success with-line btn-big mt-20 mr-1" : "form-div btn-success with-line btn-big mt-20 mr-1"}
                                                ><span
                                                // ref={this.input}
                                                >SCHEDULE AN EVALUATION<i className="fas fa-caret-right" /></span>
                                                </button>
                                                {/* <Button className={this.state.toggleModal ? "open" : ""} onClick={this.toggleModalFunc} ><span>SCHEDULE AN EVALUATION<i className="fas fa-caret-right" /></span></Button> */}
                                                <Link to="/shop-left" className="border-butn mt-20 ml-1"><span>Shop Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overlay overlay-bg-dark overlay-bg-img" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    }
}

export default Banner;