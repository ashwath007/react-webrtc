import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import {connectWebSocket} from './utils/WebSocket/WebSocketConn'

import {BrowserRouter, Link, Switch , Route} from 'react-router-dom';
import Login from './Dashboard/Login';
import Dash from './Dashboard/Dash';


function App() {

  useEffect(() => {
    connectWebSocket()  
  }, [])

  return (

    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/dash">
          <Dash/>
        </Route>

      </Switch>
    
    </BrowserRouter>
   
  );
}

export default App;
