
import React, { useState } from 'react';

export default function Input(props) {
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const setValueNameFn =(event)=>{
    setInputName(event.target.value);
  }
  const setValueStatusFn =(event)=>{
    setInputStatus(event.target.value);
  }
  const addEntryFn=()=>{
    if(inputStatus!=="" && inputName!==""){
      let status=inputStatus.charAt(0).toUpperCase()+inputStatus.substring(1).toLowerCase();
      props.addEntryFn(inputName,status);
      setInputName("");
      setInputStatus("");
    }else{
      alert("Please Enter Note Name and Note Status before adding");
    }
  }
  return (
    <div>
        <input type="text" className='inputBox' name="inputName" id="inputname" value = {inputName} data-testid="input-note-name" placeholder="Note Name" onChange={setValueNameFn} style={{textAlign:'center', margin:"2px"}}/>
        <input type="text" className='inputBox' name="inputStatus" id="inputStatus" value = {inputStatus} data-testid="input-note-status" placeholder="Note Status" onChange={setValueStatusFn} style={{textAlign:'center' , margin:"2px"}}/>
        <button type="submit" data-testid="submit-button" onClick={addEntryFn} style={{textAlign:'center' , margin:"2px"}}>Add Note</button>
    </div>
  )
}
