import React, { Component,Fragment } from 'react'
import { Navbar, Container,Form,FormControl,Button } from 'react-bootstrap';
import Logo from '../assets/images/ctp.png';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class TopNavbar extends Component {
  render() {
    return (
      <Fragment>
  <Navbar expand="lg" variant="light" bg="light">
    <Container fluid={true}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block"
        />
Creative Team      </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-1"
          aria-label="Search"
        />
        <Button variant="outline-success"><i className="fa fa-search"></i></Button>
      </Form>
        <a className="cart-btn"><i className="fa fa-shopping-cart"></i> items 0 </a>

<a href="#"className='heart-icon h5'>
  <i className="fa  fa-heart"></i>
  <sup><span className="badge text-white bg-danger">0</span></sup>
</a>

<a href="#" className='notification-icon h5'>
  <i className="fa h3 fa-bell"></i>
  <sup><span className="badge text-white bg-danger">0</span></sup>
</a>

<a className="share-icon h5" href="#"><i className="fa fa-share "></i></a>

<a className="user-icon h5" href="#"><i className="fa fa-address-card "></i></a>


    </Container>
  </Navbar>
</Fragment>

    )
  }
}

export default TopNavbar
