import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import {connectWebSocket} from './utils/WebSocket/WebSocketConn'

function App() {

  useEffect(() => {
    connectWebSocket()  
  }, [])

  return (
    <div className="App">
      <h2>
        WebRTC here 
      </h2>
    </div>
  );
}

export default App;
