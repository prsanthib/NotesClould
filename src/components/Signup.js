import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:""}) 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:2000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken); 
            navigate("/");  
            props.showalert("Account created successfully","success");
        } else {
            props.showalert("Invalid credentials","danger");
        }
    }

    const handleOnchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2 style={{color:"#AF54FF"}}>SignUp to use NotesCloud</h2>
            <form onSubmit={handleSubmit} className='my-3'>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={handleOnchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={handleOnchange} aria-describedby="emailHelp"/>
                 </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' minLength={5} required onChange={handleOnchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' minLength={5} required onChange={handleOnchange}/>
                </div>
                 
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
