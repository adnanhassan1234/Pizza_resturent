import React from 'react';
import MenuBar from './Components/MenuBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact"
import Footer from './Components/Footer';
import ScrollButton from './Components/ScrollButton';
import { Fragment } from 'react';


function App() {
        return (
                <>
                        <MenuBar />
                        <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/menu' component={Menu} />
                                < Route exact path='/contact' component={Contact} />
                                {/* <Route component={Error} /> */}
                                <Redirect to='/' />
                        </Switch>
                        <Footer />
                        <Fragment>
                                <ScrollButton />
                        </Fragment>
                </>
        )
}
export default App;
