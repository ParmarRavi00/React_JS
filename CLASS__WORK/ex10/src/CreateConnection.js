import React from 'react'

function CreateConnection(serverUrl,roomId) {
  return {
    connect()
    {
        console.log("Connected to " + roomId + " " + serverUrl)
    },
    disconnect()
    {
        console.log("Disconnected from " + roomId + " " + serverUrl)
    }
  }
}

export default CreateConnection;
