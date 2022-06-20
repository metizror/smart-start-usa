import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import teamblock from '../../../data/story/story.json';
import UserContext from '../../../Context/UserContext';

// install Swiper components
SwiperCore.use([Navigation]);

const settings = {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 5,
        },
    }
}
class Team extends Component {
    static contextType = UserContext

    render() {
        const { user, setUser } = this.context     // USE OF CONTEXT API
        // console.log(this.context);

        return (
            <section className="browse-cat bg-theme-primary section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title text-light-black header-title our-program-text">OUR COURSES</h3>
                                <div>
                                    <button
                                        onClick={() => {
                                            const newUser = { user: 'abhinav', isModalOpen: !user.isModalOpen }  // USE OF CONTEXT API
                                            setUser(newUser)
                                        }}
                                    >
                                        Update User
                                    </button>
                                    <p>{`Current User: ${(console.log(user))}`}</p>
                                </div>
                                <span className="fs-16 align-self-center"><Link to="/story-grid">See All</Link></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="category-slider swiper-container" {...settings} navigation>
                                {teamblock.map((item, i) => (
                                    <SwiperSlide className="swiper-slide" key={i}>
                                        <Link to={"/story-details/" + item.id} className="categories">
                                            <div className="icon text-custom-white bg-light-green ">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} className="rounded-circle" alt={item.name} />
                                            </div>
                                            <span className="text-light-black cat-name">{item.name}</span>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;