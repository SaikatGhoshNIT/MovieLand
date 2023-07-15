import React, { useState } from 'react'

export default function TimeState() {
    const time = new Date().toLocaleTimeString();

    // const state = useState()
    const[firstName, setFirstName] = useState("")
    const[fullName, setFullName] = useState("")
    const[initialTime,setT] = useState(time)
    const getCurrentTime = ()=>{
        const time = new Date().toLocaleTimeString();
        setT(time)
    }

    const inputEvent = (e)=>{
      setFirstName(e.target.value)
    }

    const onSubmit = ()=>{
      setFullName(firstName)
    }

    setInterval(getCurrentTime,1000)
  return (
    <div>
        <h1 style={{textAlign : "center"}}>
            {initialTime}
        </h1>
        <div>
          <h1 style={{textAlign : "center" , padding : "20px"}}>Hello {fullName}</h1>
          <input style={{display : "block",margin : "auto",textAlign : "center", padding : "20px", borderRadius : "5px"}}
          type='text'
          placeholder='Enter your name'
          onChange={inputEvent}
          value ={firstName}/>
          <button onClick={onSubmit} style={{display : "block",margin : "auto",textAlign : "center", padding : "10px", borderRadius : "5px"}}>Click Me</button>
        </div>
        {/* <button onClick={getCurrentTime}>Current Time</button> */}
    </div>
  )
}
