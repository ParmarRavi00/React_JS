import React from 'react'
import { useEffect } from 'react'

function UseWindowListener(eventType,functionName) {
 
    useEffect(() => {
        window.addEventListener(eventType,functionName)
    }, [eventType, functionName])
    
}

export default UseWindowListener
