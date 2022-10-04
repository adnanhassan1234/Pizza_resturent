import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/img/slide-1.jpg';
import slide4 from '../assets/img/slide-4.webp';
import hero from '../assets/img/hero-bg.jpg';
import event from '../assets/img/events-bg.jpg';
import Button from '@material-ui/core/Button';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { NavLink } from 'react-router-dom';
import CardItem from '../CardItem';
import CardList from '../CardList';
import MenuTabsList from './MenuTabsList';
import MenuTabsData from './MenuTabsData';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Sonnet from './Sonnet';
import Check from './Check';
import Form from 'react-bootstrap/Form'
import GalleryArr from './GalleryArr';
import Gallery from './Gallery';



const Home = () => {

    const [items, setItem] = React.useState(MenuTabsData);

    const filterItem = (cataItem) => {
        const updatedItem = MenuTabsData.filter((curElementDta) => {
            return curElementDta.catagery === cataItem;
        });
        setItem(updatedItem);
    }



    return (
        <>
            {/* ================ hero_section =================== */}
            <div className="hero_section">
                <Carousel fade>
                    <Carousel.Item className='firstclass'>
                        <img
                            className="d-block w-100"
                            src={slide4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3> <span style={{ color: 'rgb(255 4 117)' }}> Delicious </span>Restaurant</h3>
                            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                            </p>
                            <div className="btn-section">
                                <NavLink to="/menu" style={{ textDecoration: "none" }}><Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <RestaurantMenuIcon />   Our Menu
                                </Button> </NavLink>
                                <NavLink to="/contact" style={{ textDecoration: "none" }}>  <Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <LocalPizzaIcon />  Order Now
                                </Button> </NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='firstclass'>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>MecDonal Restaurant</h3>
                            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                            </p>
                            <div className="btn-section">
                                <NavLink to="/menu" style={{ textDecoration: "none" }}><Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <RestaurantMenuIcon />   Our Menu
                                </Button> </NavLink>
                                <NavLink to="/contact" style={{ textDecoration: "none" }}>  <Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <LocalPizzaIcon />  Order Now
                                </Button> </NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='firstclass'>
                        <img
                            className="d-block w-100"
                            src={hero}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Pedro's Pizzeria</h3>
                            <p> nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem Occaecati alias dolorem mollitia ut. Similique ea voluptatem..</p>
                            <div className="btn-section">
                                <NavLink to="/menu" style={{ textDecoration: "none" }}><Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <RestaurantMenuIcon />   Our Menu
                                </Button> </NavLink>
                                <NavLink to="/contact" style={{ textDecoration: "none" }}>  <Button variant="contained" className=' mx-2 my-2' color="secondary">
                                    <LocalPizzaIcon />  Order Now
                                </Button> </NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* ================ menu_section =================== */}
            <div className="menu_section py-5">
                <div className="container">
                    <div className="title text-center">
                        <h2>OUR MENU</h2>
                    </div>
                    <div className="row" style={{ marginTop: '55px' }}>
                        {
                            CardList.map((data, index) => {
                                return (
                                    <CardItem
                                        key={index}
                                        image={data.image}
                                        title={data.title}
                                        des={data.des}
                                        price={data.price}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* ================ menu_list_section =================== */}

            <div className="menu_list_section py-3">
                <div className="container">
                    <div className="title text-center">
                        <h2>Check our tasty <span>Menu</span> </h2>
                    </div>
                    <div className="menu-tabs mt-4 text-center ">
                        <Button className=" my-1 mx-1" variant="contained" color="secondary" onClick={() => {
                            setItem(MenuTabsData);
                        }}> Show All </Button>
                        <Button className="my-1 mx-1" variant="outlined" color="secondary" onClick={() => filterItem('breakfast')}> Starters</Button>
                        <Button className="my-1 mx-1" variant="outlined" color="secondary" onClick={() => filterItem('dinner')}> Salads</Button>
                        <Button className="my-1 mx-1" variant="outlined" color="secondary" onClick={() => filterItem('lunch')}> Specialty</Button>
                    </div>
                    <div className="row pb-5" style={{ marginTop: '30px' }}>
                        {
                            items.map((data, index) => {
                                return (
                                    <MenuTabsList
                                        key={index}
                                        name={data.name}
                                        price={data.price}
                                        list={data.list}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* ================ Check our Specials_section =================== */}

            <div className="special_section py-3">
                <div className="container">
                    <div className="title text-center">
                        <h2>Check our <span>Specials</span> </h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                            adipisci <br /> expedita  at voluptas atque vitae autem.</p>
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='my-5 '>
                            <Col md={3}>
                                <Nav variant="pills" className="flex-column pb-3 text-center">
                                    <Nav.Item >
                                        <Nav.Link eventKey="first">Pizza order</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Fatijja Order</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Fast food</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">killlo mutton</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five">Special food</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={9}>
                                <Tab.Content>
                                    <Sonnet />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>

            {/* ================ Organize Your Events in our Restaurant  =================== */}
     
            <div className="event_section py-5">
                <div className="container">
                    <div className="title pb-5 text-center text-white">
                        <h2>Organize Your Events in our Restaurant </h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="image-section text-center">
                                        <img src={event} width="100%" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="full text-white">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>$189</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <Check />
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="image-section text-center">
                                        <img src={event} width="100%" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="full text-white">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>$200</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <Check />
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="image-section text-center">
                                        <img src={event} width="100%" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="full text-white">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>$18.96</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <Check />
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            {/* ================ contact section  =================== */}

            <div className="contact_section my-5">
                <div className="container">
                    <div className="title text-center">
                        <h2 className='mb-5'>Contact Us</h2>
                    </div>
                    <form>
                        <div className="row p-5">
                            <div className="col-lg-6 col-sm-6">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter email" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-6 col-sm-6">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-12">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Subject" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-12">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                                </Form.Group>

                            </div>
                            <div className="btn-sub text-center">
                                <Button type='submit' variant="contained" className='btn12 my-2 ' color="secondary">
                                Send Message
                                </Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            {/* ================ Gallery section  =================== */}

            <div className="Gallery_section  my-5">
                <div className="container-fluid">
                    <div className="title text-center">
                        <h2 className=''>Some photos from <span> Our Restaurant</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita <br />
                            at voluptas atque vitae autem.</p>
                    </div>
       
                    <div className="row mt-5">
                    {
                            GalleryArr.map((data, index) => {
                                return (
                                    <Gallery
                                        key={index}
                                        image={data.image}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home;


