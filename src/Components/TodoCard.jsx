import React, { useContext } from 'react'
import {TaskContext, TaskStateContext, DescriptionContext, DescriptionStateContext, ListStateContext} from '../App'

export const TodoCard = () => {
    const title = useContext(TaskContext)
    const setTitle = useContext(TaskStateContext)
    const description = useContext(DescriptionContext)
    const setDescription = useContext(DescriptionStateContext)
    const setTask = useContext(ListStateContext)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleAdd = () => {
        setTask((prevTask) => [...prevTask,{
            taskNo: prevTask.length,
            taskTitle: title,
        }])
        setTitle('')
    }
    const handleDelete = () => {
        setTitle('')
        setDescription('')
    }

  return (
    <div className='bg-gray-200 inline-block p-5 rounded-3xl'>
    <div className='flex flex-col text-start'>
        <div>
            <label htmlFor="" className='text-black font-semibold mr-2'>Task:</label>
            <input type="text" value={title} className='' onChange={handleTitleChange} />
        </div>
        <div className=''>
            <label htmlFor="" className='text-black font-semibold'>Description:</label>
            <br/>
            <textarea type="text" className='w-56 h-56' value={description} onChange={handleDescriptionChange} />
        </div>
        </div>
        <div>
            <div className='bg-emerald-500 w-2/4 m-auto my-3 rounded-xl cursor-pointer hover:bg-emerald-700' onClick={handleAdd}>Add</div>
            <div className='bg-red-500 w-2/4 m-auto rounded-xl cursor-pointer hover:bg-rose-700' onClick={handleDelete}>Delete</div>
        </div>
    </div>
  )
}
