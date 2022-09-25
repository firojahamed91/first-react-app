import React, {useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent=(event)=>{
        const {name, value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal, 
                [name] : value,
            }
        })
    }
const formSubmit=(e)=>{
    e.preventDefault();
    alert(`
    Name : ${data.fullname} 
    Phone : ${data.phone} 
    E-mail : ${data.email} 
    Messege : ${data.msg} `)
}
    return (
        <>
           <div className="my-5 pt-5 ">
                <h1 className="">Contact US</h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                      <form onSubmit={formSubmit} className="border p-4 shadow">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">FullName</label>
                            <input 
                            type="name" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label"> Phone </label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Mobile Number"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Messege</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                rows="3"></textarea>
                        </div>
                         <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                      </form>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Contact
 