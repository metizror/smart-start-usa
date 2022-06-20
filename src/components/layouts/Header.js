import React from 'react';
import HeaderComponent from '../../helper/navhelper';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import UserContext from '../../Context/UserContext';
// import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
// import { GetStartedSlider } from './GetStartedSlider';

// import Offcanvas from "react-bootstrap/Offcanvas";


class Header extends HeaderComponent {
    static contextType = UserContext
    
    state = {
        scheduleModalIsOpen: false,
    }
    addNewLinkHandler(forth_item) {
        const isLink = forth_item.link.search('mylearnworlds') == -1 ? false : true
        // console.log(forth_item.link.search('mylearnworlds'));
        if (!isLink) {
            return forth_item;
        } else {
            console.log('falsess');
            return window.location.href = forth_item.link
        }
    }
  
    render() {
        console.log("-----------", this.context);
        const { user, setUser } = this.context
        console.log(user.isModalOpen);

        const stickyheader = this.state.isTop ? 'sticky' : '';
        const scrollable = window.pageYOffset;
        // console.log(scrollable);

        const isModalIsOpenFunc = () => setUser({ isModalOpen: !user.isModalOpen })
        const isModalIsOpen = user.isModalOpen
        // const isModalIsOpen = this.state.toggleModal
        const scheduleToggle = this.state.scheduleToggle
        return (
            // <header className="header sticky">
            <header className={"header sticky"}>
                <div className="container-fluid custom-container">``
                    <div className="row">
                        <div className="col-12">
                            <div className="navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo/newlogo.png"} className="image-fit" alt="logo" />
                                    </Link>
                                </div>
                                <div className={classNames("main-navigation", { "active": this.state.navmethod })}>
                                    <nav>
                                        <ul className="main-menu" >

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
                                                                                <li className={`menu-item ${third_item.child ? 'menu-item-has-children' : ''} `} key={i}>

                                                                                    {third_item.child ? <Link onClick={e => e.preventDefault()} to="/" > {third_item.linkText} <span className="arrow" /></Link> : <Link to={third_item.link}> {third_item.linkText} </Link>}
                                                                                    {third_item.submenu ?
                                                                                        <ul className="sub-menu">
                                                                                            {third_item.submenu.map((forth_item, i) => (
                                                                                                <li className={`menu-item ${forth_item.child ? 'menu-item-has-children' : ''} `} key={i}>

                                                                                                    <Link
                                                                                                        onClick={() => this.addNewLinkHandler(forth_item)}
                                                                                                    // to={window.href = forth_item.link}
                                                                                                    >{forth_item.linkText}</Link>
                                                                                                    {/* {this.addNewLinkHandler()} */}
                                                                                                    {/* {window.location.href = forth_item.link} */}
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul> : null}

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
                                            {/* <div> */}
                                            <div className="parent-div-modal"  >
                                                <div className='sub-div-modals is-open' >
                                                    <div className={isModalIsOpen ? 'open' : 'form-div '}   >
                                                        <Form className="form">
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
                                                            <Form.Group className="mb-3">
                                                                <Form.Control type="number " placeholder="Child Age" />
                                                            </Form.Group>
                                                            {/* <Form.Text > */}
                                                            <Form.Text className="d-flex flex-row" placement="right">
                                                                <DropdownButton title="Child Grade" variant="success">
                                                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                                                </DropdownButton>

                                                            </Form.Text>


                                                            <Button variant="success" className='mt-4'>SUBMIT</Button>
                                                        </Form>
                                                        <span class="border-width-line"></span>

                                                        <Button variant="success" className=' position-absolute end-0 p-4' onClick={isModalIsOpenFunc}  >Close</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <GetStartedSlider isModalIsOpen={isModalIsOpen} toggleModalFunc={this.toggleModalFunc} /> */}
                                        </ul>
                                        <div className='get-started-btn' >
                                            <Button variant="success"
                                                style={{ padding: "17px" }}
                                                className={isModalIsOpen ? 'open' : ''}
                                                ref={this.state.toggleModal}
                                                onClick={isModalIsOpenFunc}>Get Started</Button>
                                                {/* onClick={this.toggleModalFunc}>Get Started</Button> */}
                                        </div>
                                    </nav>



                                </div>
                                <div className="right-side-navigation">
                                    <ul>
                                        <li className="hamburger-menu">
                                            <Link to="" className={classNames("menu-btn", { "active": this.state.navmethod })} onClick={this.toggleNav}>
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