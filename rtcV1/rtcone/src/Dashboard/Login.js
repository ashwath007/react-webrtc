import React,{useState} from 'react';
import "./Login.css"

const Login = () => {
    const [name, setname] = useState('');

    const handleSubmitClicked = () => {
        if(name.length > 0 ){
            
        }
    }

    return(
        <div className="login-page_container bg_main">   
            
            <div className="login-page_login_box bg_sec">
            <h4>
                Login
            </h4>
   
            <input 
            value={name}
            onChange={(txt) => setname(txt.target.value)}
            className="login-page_input" placeholder="Enter the name here "/>
            <button 
            onClick={() => handleSubmitClicked()}
            className="login-page_button login-page_button_container">
               Enter
            </button>
            </div>
           

        </div>
    )
}

export default Login;