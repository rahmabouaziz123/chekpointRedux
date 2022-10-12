// creation mon state

import {
  ADDNIEWTASK,
  COMPLETE,
  DELETEELEMENT,
  EditELEMENT,
  FILTERELEMENT,
} from "./actionType";

const list = [
  { id: Math.random(), action: "Make up1", isDone: true },
  { id: Math.random(), action: "Go back Home2", isDone: false },
  { id: Math.random(), action: "app Don3", isDone: true },
];

export const reducer = (state = list, action) => {
  switch (action.type) {
   

    case DELETEELEMENT:
      return [...state.filter((el) => el.id !== action.payload)];
      // return  state.filter((el) => el.id !== action.payload)

    case COMPLETE:
      // return [
      //   ...state.map((el) =>
      //     el.id == action.payload ? { ...el, isDone: !el.isDone } : el
      //   ),
      // ];
          
      return state.map(el=>el.id == action.payload ?{ ...el, isDone: !el.isDone } : el)
         

    case ADDNIEWTASK:
      return [...state,action.payload];

      

     case FILTERELEMENT:
      // return [...state.filter((el) => el.isDone !== true)];

      return state.filter(el=>el.isDone!==true)

            case EditELEMENT:
                   ///// 
              return state.map(el=>el.id=== action.payload.id?{...el,...action.payload}:el)

    default:
      return state;
  }
};
