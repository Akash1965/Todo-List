import React, { useContext, useEffect } from 'react'
import { ListContext, ListStateContext} from '../App'

export const List = () => {
  const listTitle = useContext(ListContext)
  const setListTitle = useContext(ListStateContext)

  // useEffect(() => {
  //   console.log(listTitle)
  // }, [listTitle])

  const deleteTask = (count) => {
    console.log(listTitle)
    console.log(count)
    setListTitle(listTitle.splice(count, 1))
    const todo = listTitle.map((item, index) => {
      if(index >= count) {
        return {...item,
        taskNo: index}
      }
      return item
    })
    setListTitle(todo)
  }

  return (
    <div className='bg-gray-200 text-black px-4 py-6 my-10 w-96'>
        <div className='flex justify-around flex-col'>
          <ul className='flex flex-col gap-y-2'>
            {
              listTitle.slice(1).map((item, index) => {
                return <li className='flex justify-around gap-y-2' key={index}>
                <div className='font-semibold'>{item.taskNo}</div>
                <div className='font-semibold text-red-700 cursor-pointer'>{item.taskTitle}</div>
                <div className='bg-red-500 font-semibold text-white px-3 rounded-xl cursor-pointer hover:bg-red-700' onClick={() => deleteTask(index+1)}>Delete</div>
                </li>
                })
            }
          </ul>
        </div>
    </div>
  )
}
