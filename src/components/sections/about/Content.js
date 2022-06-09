import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Blogpost from './Blogpost';
import Workprocess from './Workprocess';
import Testimonials from '../../layouts/Testimonials';
import AboutVision from './AboutVision';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext />
                <AboutVision />
                {/* <Workprocess/> */}
                {/* <Testimonials/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Content;