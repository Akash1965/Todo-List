import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ListContext } from '../App'

export const TodoListTask = () => {
  const taskNo  = useParams()
  const task = useContext(ListContext)

  return (
    <div className='bg-gray-200 inline-block p-5 rounded-3xl'>
    <div className='flex flex-col text-start'>
      {
        task.slice(1).filter(item => item.taskNo == taskNo.id).map((item, index) => (
           <div key={index}>
            <div>
              <label htmlFor="" className='text-black font-semibold mr-2'>Task:</label>
              <input type="text" value={item.taskTitle} readOnly={true} />
            </div>
            <div className=''>
              <label htmlFor="" className='text-black font-semibold'>Description:</label>
              <br/>
              <textarea type="text" className='w-56 h-56' value={item.taskDesc} readOnly={true} />
            </div>
          </div>
        ))
      }
        </div>
    </div>
  )
}
