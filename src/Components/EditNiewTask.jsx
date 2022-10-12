import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handelEdit, hendelAddCard, hendelFilter } from "../redux/action";

export const EditNiewTask = ({info}) => {

  //console.log(info)


  const [action, setAction] = useState(info.action);
  console.log(action)

  const dispatch = useDispatch();

  //// function submut

  const handelSubmit = (e) => {
    e.preventDefault();

    const Edit={id: info.id,
     action,

    }
         dispatch(handelEdit(Edit))

  };

  return (
    <div>
      {/* <form onSubmit={handelSubmit}> */}
      <form className="divForm" onSubmit={handelSubmit}>
        <input
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className="inputel"
        />

        <button
          type="submit"
          className="btn"
         
        >
          EDIT<i className="fa-solid fa-plus"></i>
        </button>
        <hr />
      </form>

      <hr />
    </div>
  );
};
