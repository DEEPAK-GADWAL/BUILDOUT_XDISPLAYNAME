import React,{useState,useRef} from "react";

const DisplayName=()=>{
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[fullName,setFullname]=useState("")

const handleFullname=(e)=>{
  e.preventDefault()
  setFullname(`${firstName} ${lastName}`)
}
  return(
<div className="mainContainer">
  <form onSubmit={handleFullname}>
    <label htmlFor="">first Name:</label>
    <input type="text" value={firstName} id="firstName" onChange={(e)=>setFirstName(e.target.value)} />
    <br />
    <label htmlFor="">Last Name:</label>
    <input value={lastName} id="lastName" onChange={(e)=>setLastName(e.target.value)} type="text" />
    <br />
    <button type="submit">submit</button>
  </form>

 {fullName && <p>full Name: {fullName}</p>}

</div>
  )
}


export default DisplayName