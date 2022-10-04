import React from 'react';
import CardList from '../CardList';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import event from '../assets/img/events-bg.jpg';
import MenuTabsList from './MenuTabsList';
import MenuTabsData from './MenuTabsData';
import Sonnet from './Sonnet';
import Carousel from 'react-bootstrap/Carousel';
import Check from './Check';

const About = () => {


  const [items, setItem] = React.useState(MenuTabsData);

  const filterItem = (cataItem) => {
      const updatedItem = MenuTabsData.filter((curElementDta) => {
          return curElementDta.catagery === cataItem;
      });
      setItem(updatedItem);
  }


  return (
    <>
           
            {/* ================ menu_list_section =================== */}

            <div className="menu_list_section py-3">
                <div className="container">
                    <div className="title text-center"  style={{marginTop:"88px"}}>
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
    </>
  )
}

export default About;