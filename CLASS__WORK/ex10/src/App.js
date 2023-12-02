import './App.css';
import { useEffect, useState } from 'react';
import CreateConnection from './CreateConnection';

function ChatRoom({roomId})
{

  const [serverUrl,setServerUrl] = useState('http://localhost/4564');

  useEffect(()=>{

    const connection = CreateConnection(serverUrl,roomId);

    connection.connect();

    return ()=>{
      connection.disconnect();
    }

  },[roomId,serverUrl]);

return(<>

    {/* ServerUrl : */}
  
   
    

</>)
}

function App() {

  const [roomId,setRoomId] =  useState("general");
  const[show,setShow] = useState(false)

  return (
    <div className="App">

    Choose Chat Room:
    <select onChange={(e)=>{setRoomId(e.target.value)}}>
      <option>General</option>
      <option>Music</option>
      <option>Travel</option>
    </select>

    <button onClick={()=>{setShow(false)}}>
      {show ? "Close Chat" : "Open Chat"}
    </button>

    {!show && <hr/>}

    <ChatRoom roomId={roomId}/>
    
    </div>
  );
}

export default App;
