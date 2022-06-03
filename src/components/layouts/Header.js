import React from 'react';
import HeaderComponent from '../../helper/navhelper';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
import { GetStartedSlider } from './GetStartedSlider';

// import Offcanvas from "react-bootstrap/Offcanvas";


class Header extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        const isModalIsOpen = this.state.toggleModal
        console.log(isModalIsOpen);
        return (
            <header className={"header " + stickyheader}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/newlogo.png"} className="image-fit" alt="logo" />
                                    </Link>
                                </div>
                                <div className={classNames("main-navigation", { "active": this.state.navmethod })}>
                                    <nav>
                                        <ul className="main-menu">

                                            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                    {item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-custom-white"> {item.linkText} <span className="arrow" /></Link> : <Link to={item.link} className="text-custom-white"> {item.linkText} </Link>}
                                                    {item.child ?
                                                        <ul className="sub-menu" role="menu">
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                    {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/" > {sub_item.linkText} <span className="arrow" /></Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                    {sub_item.submenu ?
                                                                        <ul className="sub-menu">
                                                                            {sub_item.submenu.map((third_item, i) => (
                                                                                <li className="menu-item" key={i}><Link
                                                                                    to={third_item.link}>{third_item.linkText}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                            <div className="parent-div-modal">
                                                <div className='sub-div-modals' >
                                                    {isModalIsOpen && <div className='form-div' >
                                                        <Form  className="form">
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Schedule an evaluation
                                                                    Meet with our faculty and identify the proper
                                                                    course level for your child.</Form.Label>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Control type="text" placeholder="FirstName" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Control type="text" placeholder="LastName" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                                                <Form.Control type="email" placeholder="Enter email" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Control type="number" placeholder="Phone Number" />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Control type="number " placeholder="Zip Code" />
                                                            </Form.Group>
                                                            Child Grade
                                                            <Form.Text>
                                                                <DropdownButton title="" >
                                                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                                                </DropdownButton>
                                                            </Form.Text>
                                                        </Form>
                                                        <Button variant="success" onClick={this.toggleModalFunc}  >Close</Button>
                                                    </div>
                                                    }
                                                </div></div>
                                            <Button variant="success" onClick={this.toggleModalFunc}  >   Get Started</Button>
                                            {/* <GetStartedSlider isModalIsOpen={isModalIsOpen} toggleModalFunc={this.toggleModalFunc} /> */}
                                        </ul>
                                    </nav>



                                </div>
                                <div className="right-side-navigation">
                                    <ul>
                                        <li className="hamburger-menu">
                                            <Link to="dfdf" className={classNames("menu-btn", { "active": this.state.navmethod })} onClick={this.toggleNav}>
                                                <span />
                                                <span />
                                                <span />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;