import logo from './logo.svg';
import './App.css';
import { TaskList } from './Components/TaskList';
import { useState } from 'react';
import { AddNiewTask } from './Components/AddNiewTask';
import { useSelector } from 'react-redux';
import { hendelDelete } from './redux/action';
import { EditNiewTask } from './Components/EditNiewTask';

function App() {


  const tab =useSelector(state=>state)

  // console.log(tab);

  




  // const [list, setList] = useState([
  //   { id:Math.random(),action:"Make up",isDone:true},
  //   { id:Math.random(),action:"Go back Home",isDone:false},
  //   { id:Math.random(),action:"app Don",isDone:true},
  // ])


  ///delete

//  const HandelDelete=(ID)=>{setList(list.filter((el)=>el.id!==ID))}
 ///complete
//  const HandelComplete=(id)=>{setList(list.map(el=>el.id===id?{...el,isDone:!el.isDone}:el))}

//////add
// const handelAdd=(newOne)=>setList([...list,newOne])

/////////filter
// const handelFilter=()=>{setList(list.filter((el)=>el.isDone!==true ))}


  return (
    <div className="App">

      {/* <AddNiewTask handelAdd={handelAdd} handelFilter={handelFilter}/> */}
     {/* <TaskList  data={list}  HandelDelete={HandelDelete} HandelComplete={HandelComplete} /> */}

     <AddNiewTask />
     
     <TaskList  data={tab}   />

    
     
   
   
     </div>
  );
}

export default App;
