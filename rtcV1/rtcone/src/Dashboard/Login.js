import React,{useState} from 'react';
import "./Login.css"
import {useHistory} from "react-router-dom"
import {connect} from 'react-redux';
import {setUserName} from "../actions/dashBoardAction"
import { registerNewUser } from '../utils/WebSocket/WebSocketConn';


const Login = ({setUserName}) => {
    const [name, setname] = useState('');

    let history = useHistory();

    const handleSubmitClicked = () => {
        if(name.length > 0 ){
            history.push('/dashboard');
            setUserName(name)
            registerNewUser(name)
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



const mapDispatchToProp =  {
    setUserName: (username) => setUserName(username) 
}


export default connect(null ,mapDispatchToProp)(Login);