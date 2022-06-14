import React, { Component } from 'react'

export class JoinSmartStartUSA extends Component {
    render() {
        return (
            <section className="feedback-area-two section-padding bg-secondary " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/footer-bg.png)" }}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left text-center">
                                <h3 className="text-white header-title">Join Smart Start Today</h3>
                                <button type="button" class="btn btn-secondary  btn-md mt-4 ">Schedule And Evaluations</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default JoinSmartStartUSA