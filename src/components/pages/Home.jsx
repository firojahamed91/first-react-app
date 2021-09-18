import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../images/02.png'
import Common from './Common'

const Home = () => {
    return (
        <>
          <Common 
          name="Grow your business with" 
          imgsrc={home} 
          btnName="Get Stated" 
          visit="/service"/>
        </>
    )
}

export default Home




























{/* <section  id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Grow your business with <strong className="brand-name">FA</strong></h1>
                        <h2 className="my=3">we are the team of talented developer making websites</h2>
                        <div className="mt-3">
                          <NavLink to="/service" className="btn-get-started ">get Stated</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={home} className="img-fluid animated" alt="Home image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}