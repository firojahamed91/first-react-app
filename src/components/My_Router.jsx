import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './Navbar'
import Footer from './pages/Footer'

const My_Router = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/service' component={Service}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Redirect to='/'/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

export default My_Router
