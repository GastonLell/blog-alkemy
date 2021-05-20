//REACT ROUTER
import { Link, useHistory } from "react-router-dom";
import {useEffect, useState} from 'react';
//COMPONENTER BOOTSTRAP
import { Navbar, Button, Col } from "react-bootstrap";

//REACT ICONS
import { FaSignOutAlt } from "react-icons/fa";


const NavBar = () => {

  const history = useHistory();

  const handleSignOut = () => {

    localStorage.removeItem('token');

    history.push('/login')

  }

  return (
    <Navbar bg="primary" variant="dark" className="px-4 py-3">

      <Col className="px-0 text-left">
        <Navbar.Brand>
          <Link 
            style={{"text-decoration": "none", "color": "#fff"}}
            to='/'
          >AlkePosts</Link>
        </Navbar.Brand>
      </Col>
      
      <Col className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleSignOut}><FaSignOutAlt/></Button>
      </Col>

    </Navbar>
  );
};
export default NavBar;