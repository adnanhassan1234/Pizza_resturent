import React, {useEffect , useState} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/10.png';

const MenuBar = (props) => {

     //navbar scroll when active state
     const [navbar, setNavbar] = useState(false)

 
     //navbar scroll changeBackground function
     const changeBackground = () => {
       console.log(window.scrollY)
       if (window.scrollY >= 120) {
         setNavbar(true)
       } else {
         setNavbar(false)
       }
     }
   
     useEffect(() => {
       changeBackground()
       // adding the event when scroll change background
       window.addEventListener("scroll", changeBackground)
     },[])

     
   

    return (
        <>

            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className={navbar ? "navbar active" : "navbar"} >
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-collapse justify-content-end">
                            <Nav.Link as={NavLink} exact  to="/" > Home </Nav.Link>
                            <Nav.Link as={NavLink} exact  to="/about" > About Us </Nav.Link>
                            <Nav.Link as={NavLink} exact  to="/menu" > Menu </Nav.Link>
                            <Nav.Link as={NavLink} exact  to="/contact" > Contct </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )
}

export default MenuBar;