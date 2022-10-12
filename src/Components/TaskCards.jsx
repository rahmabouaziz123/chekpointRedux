import React from "react";
import { useDispatch } from "react-redux";
import { HandelComplete, handelEdit, hendelAddCard, hendelDelete } from "../redux/action";
import { EditNiewTask } from "./EditNiewTask";

// export const TaskCards = ({task ,HandelDelete ,HandelComplete}) => {

export const TaskCards = ({ task }) => {
  const dispatch = useDispatch();

 
 
  return (
    <div>
      <div>{task.action}</div>
      {/* <button onClick={()=>HandelDelete(task.id)}> delete</button> */}
      {/* <button onClick={()=>HandelComplete(task.id)} > complete</button> */}
      <button className="btn" onClick={() => dispatch(hendelDelete(task.id))}>
        {" "}
        delete
      </button>
      <button className="btn" onClick={() => dispatch(HandelComplete(task.id))}>
        {" "}
        complete
      </button>
      {/* <button className="btn" onClick={() => dispatch(handelEdit(task.id))} > Edit</button> */}
      <EditNiewTask  info={task}/>

      <hr />
    </div>
  );

 
};
