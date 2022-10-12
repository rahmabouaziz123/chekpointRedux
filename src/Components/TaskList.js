

import React from 'react'
import { TaskCards } from './TaskCards'

// export const TaskList = ({data ,HandelDelete ,HandelComplete }) => {
  export const TaskList = ({data }) => {
   //console.log(data)


  return (
    <div className='divEl'>
   {/* <div >{React.Children.toArray(data.map(el=><TaskCards  task={el} HandelDelete={HandelDelete} HandelComplete={HandelComplete} />))}</div> */}
   <div >{React.Children.toArray(data.map(el=><TaskCards  task={el}  />))}</div>
    </div>
  )
}


