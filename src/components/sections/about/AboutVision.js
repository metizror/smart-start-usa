import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class AboutVision extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col>
                        <h3> <span className="text-light-green fw-600">Our Mission </span></h3>
                        <div className="history-title mb-md-40 text-light-white  fs-5">
                            Is to provide all students with various opportunities to develop their academic skills and conquer all obstacles they encounter on their academic roads. We inspire our students to become future leaders and make a difference in our rapidly evolving world.
                        </div>
                    </Col>
                    <Col
                    // className="col-lg-6"
                    >
                        <h3> <span className="text-light-green  fw-600">Our Values</span></h3>
                        <div className="history-title mb-md-40 text-light-white  fs-5">
                            Learning is the key to success. We strongly believe that by cultivating both cognitive and emotional intelligence, we can create the next generation of independent thinkers, lifelong learners, and responsible leaders.
                        </div>
                    </Col>
                    <Col>
                        <h3> <span className="text-light-green fw-600">
                            Our Vision</span></h3>
                        <div className="history-title mb-md-40 text-light-white  fs-5">
                            We envision a world where education is accessible to everyone. We are confident that all children can succeed academically if they get into the hands of professional and passionate teachers.
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutVision