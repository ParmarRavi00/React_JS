import React from 'react'

function CreateConnection(roomId,serverUrl) {
  return {
    connect()
    {
        console.log("Connected to "+ roomId + " " + serverUrl);
    },
    disconnect()
    {
        console.log("Disconnected from "+ roomId + " " + serverUrl);
    }
  }
}

export default CreateConnection;
