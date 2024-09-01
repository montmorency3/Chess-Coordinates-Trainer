import React, {useState } from "react";
import axios from "axios";
import "./Login.css"




function Login(props){
    const [inputData, setInputData] = useState({
        email: "", 
        password: "", 
    });
    

    async function handleClick(e)  {
        e.preventDefault();
        const {name} = e.target;
        if (name==="Guest"){
            props.onAuthentication(true);
        }else {
            try{
                const response = await axios.post('http://localhost:4000/login', {inputData});
                console.log(response.data.message);
                if (response.data.message === 'Login successful'){
                    props.onAuthentication(true);
                }
            } catch (error){
                console.log(error);
            }
        }
        }



    function handleChange(e){
        const {name, value} = e.target;
        setInputData( prev => (
            {
                ...prev,
                [name] : value
            }
        )
        )
    }

    return (

         
        <form>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input name="password" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button name="Authenticate" onClick={handleClick} type="submit" className="btn btn-primary" style={{marginTop: 20}}>Submit
  </button>

  <button name="Guest" onClick={handleClick} type="submit" className="btn btn-primary" style={{marginLeft: 100, marginTop: 20,backgroundColor: 'gray', border: "black"}}>Log In as Guest 
  </button>

</form>

    );
}

export default Login;