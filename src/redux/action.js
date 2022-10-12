import { ADDNIEWTASK, COMPLETE, DELETEELEMENT, EditELEMENT, FILTERELEMENT } from "./actionType"



//////////////////////////
 export const hendelDelete=(todo)=>{
    return {
        type: DELETEELEMENT,
        payload: todo

    }
 }
 /////////////////////////

 export const HandelComplete=(x)=>{

    return{
        type:COMPLETE,
        payload:x
     }
 }
 ////////////////////////////////////// Add ////

 export const hendelAddCard=(data)=>{
    return{
        type:ADDNIEWTASK,
        payload:data
    }
}

/////////////////////////////////////filter/////

export const hendelFilter=()=>{
    return{ 
        type:FILTERELEMENT,
       
     
    }
}
///////////////////////Edit////////////////

export const handelEdit=(data)=>{
    return {
        type:EditELEMENT,
        payload: data
    }
}