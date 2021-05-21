//REACT ROUTER
import { Link, useHistory } from "react-router-dom";

//COMPONENTER BOOTSTRAP
import { Navbar, Nav, Button, Col } from "react-bootstrap";

//REACT ICONS
import { FaSignOutAlt } from "react-icons/fa";
import {   BsFillPlusSquareFill } from "react-icons/bs";

const NavBar = () => {

  const history = useHistory();

  const handleSignOut = () => {

    localStorage.removeItem('token');

    history.push('/login')

  }

  return (
    <Navbar sticky="top" bg="primary" variant="dark" className="px-4 py-3">

      <Col className="px-0 text-left d-flex">
        <Navbar.Brand>
          <Link 
            style={{"textDecoration": "none", "color": "#fff", "fontSize": "30px"}}
            to='/'
          >AlkePosts</Link>
        </Navbar.Brand>

      </Col>
      
      <Col className="d-flex justify-content-end">
        <Nav className="align-self-center mx-2">
          <Link
            style={{"textDecoration": "none", "color": "#fff", "fontSize": "20px"}}
            to='/newPost'
          >
            <BsFillPlusSquareFill/>
          </Link>
        </Nav>

        <Button 
          style={{"fontSize": "20px"}}
        variant="primary" onClick={handleSignOut}><FaSignOutAlt/></Button>
      </Col>

    </Navbar>
  );
};
export default NavBar;