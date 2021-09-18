import React from 'react'
import serv from '../images/04.png'
import Card from './Card'
import data from './Card_Data'

const Service = (props) => {
    return (
        <>
            <div className="my-5 pt-5">
                <h1 className="taxt-content">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-3">
                     {data.map((val, index)=>{
                         return(
                             <Card
                             img ={val.img}
                             title ={val.title}
                             />
                         )
                     })}
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Service
