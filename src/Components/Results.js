import React  from 'react'

export default function Results(props) {
//const [selectedButton, setSelectedButton] = useState("All");  



if(props.noteItem.length>0)
  {
    //console.log(props.noteItem.length);
    return (
    <div style={ {margin:"5px"}}>
        <div style={ {display:'flex', justifyContent:'center'}}>
          <button data-testid="allButton" onClick={()=>{props.onSelectBtn("All")}} style={{backgroundColor:props.btnAllClr,cursor:'pointer'}}>All</button>
          <button data-testid="activeButton" onClick={()=>{props.onSelectBtn("Active")}} style={{backgroundColor:props.btnActiveClr,cursor:'pointer'}}>Active</button>
          <button data-testid="completedButton" onClick={()=>{props.onSelectBtn("Completed")}} style={{backgroundColor:props.btnCompletedClr,cursor:'pointer'}}>Completed</button>
        </div>
        <div  style={ {display:'flex', justifyContent:'center', textAlign:'left' , margin:"5px"}}>
        <table style={{border: "1px solid", width:"30%", borderCollapse:"collapse", tableLayout:'fixed'}}>
          <thead data-testid="noteHead">
            <tr >
              <th style={{border: "1px solid", paddingLeft:"5px"}}>Title</th>
              <th style={{border: "1px solid", paddingLeft:"5px"}}>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
          {
            props.resultSet.map((item)=>{
              return   <tr key= {item.name}>
              <td style={{border: "1px solid", paddingLeft:"5px"}}>{item.name}</td>
              <td style={{border: "1px solid", paddingLeft:"5px"}}>{item.status}</td>
            </tr>
            }
          )
        }
          </tbody>
        </table>
        </div> 
    </div>
  )}
}
