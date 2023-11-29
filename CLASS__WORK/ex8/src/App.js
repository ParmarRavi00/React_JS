import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CreateConnection from './CreateConnection';




function ChatRoom({roomId})
{

  const [serverUrl,setServerUrl] = useState('http:/localhost/4564')

 useEffect(()=>{

  const connection = CreateConnection(roomId,serverUrl);
  connection.connect();

  // return ()=>{
  //   connection.disconnect();
  // }

 },[serverUrl,roomId]);

  return(
    <>
      <input value=  {serverUrl} 
      onChange={()=>{setServerUrl()}}
      />
    </>
  )
  
}

function App() {

  const [roomId,setRoomId] = useState("general");
  const [show,setShow] = useState(false);
  return (
    <div className="App">
     

     Choose Chat Room :

    <select 
    value={roomId}
    onChange ={(e)=>{setRoomId(e.target.value)}}
    >

      <option>general</option>
      <option>music</option>
      <option>travel</option>
    </select>

    <button onClick={()=>{setShow(false)}}>
    {show ? "Close Chat" : "Open Chat"}

    </button>

    <ChatRoom roomId={roomId}/>

    </div>
  );
}

export default App;
