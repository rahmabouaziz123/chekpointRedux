import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hendelAddCard, hendelFilter } from "../redux/action";

export const AddNiewTask = () => {
  /////state vide pour input
/////usestatesnipper
  const [first, setFirst] = useState("");
  

  const dispatch = useDispatch();

  //// function submut

  const handelSubmit = (e) => {
    e.preventDefault();
    const newone = { id: Math.random(), action: first, isDone: false };
    first.trim() === "" ? alert("write soemting") :
     dispatch(hendelAddCard(newone));

    setFirst("");
  };

  return (
    <div>
      {/* <form onSubmit={handelSubmit}> */}
      <form className="divForm" onSubmit={handelSubmit}>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          className="inputel"
        />
        {/* <button type='submit'> Add</button>   */}

        {/* <button  onClick={()=>dispatch(hendelAddCard())}   > Add</button> */}

        <button
          type="submit"
          className="btn"
         
        >
          {" "}
          Add<i className="fa-solid fa-plus"></i>
        </button>
        <hr />
      </form>
      {/* 
  <button  onClick={()=>handelFilter()}>filter </button> */}
      <div>
        {" "}
        <button className="btn " onClick={() => dispatch(hendelFilter())}>
          {" "}
          Filter
        </button>
      </div>
      <hr />
    </div>
  );
};
