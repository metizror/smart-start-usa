import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Servicetype from './Servicetype';
import Team from './Team';
import Bestsellers from './Bestsellers';
import Gallery from './Gallery';
import Donationbox from './Donationbox';
import Productbox from './Productbox';
import Advertisement from '../../layouts/Advertisement';
import Testimonials from '../../layouts/Testimonials';
import OurWorks from './OurWorks';
import JoinSmartStartUSA from './JoinSmartStartUSA.js';

import Videocta from '../../layouts/Videocta';
import Donationcampaigns from './Donationcampaigns';
import Blogpost from './Blogpost';
import Calendar from './Calendar';

class Content extends Component {

    state = {
        isModal: false,
    };

    scheduleToggleHanlder = (childData) => {
        this.setState({ isModal: childData }, this.props.parentCallback(this.state.isModal))
    };
    render() {
        return (
            <Fragment>
                <Banner

                    scheduleToggleHanlder={this.scheduleToggleHanlder}
                />
                <Team />
                {/* <OurWorks /> */}
                <Donationbox />
                <Productbox />
                {/* <Servicetype/> */}
                {/* <Videocta/> */}
                {/* <Advertisement/> */}
                {/* <Donationcampaigns/> */}
                {/* <Calendar/> */}
                <Gallery />
                <Testimonials />
                <Bestsellers />
                {/* <JoinSmartStartUSA /> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Content;