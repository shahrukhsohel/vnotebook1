//import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import React, { useState } from 'react';
import Results from './Components/Results';
function App() {
  
  const [task, setTask] = useState([]);
  const [taskActive, setTaskActive] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);
  const [count,setCount]= useState(0);
  const [btnAllClr, setBtnAllClr] = useState("grey");
  const [btnActiveClr, setBtnActiveClr] = useState("white");
  const [btnCompletedClr, setBtnCompletedClr] = useState("white");

  const [resultSet,setResultSet] =useState([]);
  let resultItems=[];
  const onSelectBtn=(btnName)=>{
    if(btnName==="Completed"){
      console.log("inside complete");
      setBtnAllClr("white");
      setBtnActiveClr("white");
      setBtnCompletedClr("grey");
      //setSelectedButton("Completed");
      resultItems =[];
      for(let i=0;i<taskCompleted.length;i++){
        resultItems.push({name:taskCompleted[i][0], status:taskCompleted[i][1]});
      }
      setResultSet(resultItems);
    }else if(btnName==="Active"){
      setBtnAllClr("white");
      setBtnActiveClr("grey");
      setBtnCompletedClr("white");
      //setSelectedButton("Active");
      resultItems =[];
      //setResultSet(resultItems);
      for(let i=0;i<taskActive.length;i++){
        resultItems.push({name:taskActive[i][0], status:taskActive[i][1]});
      }
      setResultSet(resultItems);
    } 
    else{
      setBtnAllClr("grey");
      setBtnActiveClr("white");
      setBtnCompletedClr("white");
      //setSelectedButton("All");
      resultItems =[];
      for(let i=0;i<task.length;i++){
        resultItems.push({name:task[i][0], status:task[i][1]});
      }
      setResultSet(resultItems);
    }
  }

  const addEntryFn= (inputName,inputStatus)=>{
    let allTaskArr = task;
    allTaskArr.push([inputName,inputStatus]);
    setTask(allTaskArr);
    if(inputStatus==="Active"){
      let activeTaskArr=taskActive;
      activeTaskArr.push([inputName,inputStatus]);
      setTaskActive(activeTaskArr);
    }else if(inputStatus==="Completed"){
      let completedTaskArr=taskCompleted;
      completedTaskArr.push([inputName,inputStatus]);
      setTaskCompleted(completedTaskArr);
    }
    setCount(count+1);
    onSelectBtn("All");
  }
  return (
    <div className="App">
     <h1>Note Application</h1>
     <Input addEntryFn = {addEntryFn}/>
     <Results resultSet={resultSet} btnAllClr={btnAllClr} btnActiveClr={btnActiveClr} btnCompletedClr={btnCompletedClr}  noteItem={task} onSelectBtn={onSelectBtn} count={count}/>
    </div>
  );
}

export default App;
