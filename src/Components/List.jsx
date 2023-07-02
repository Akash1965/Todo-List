import React, { useContext } from 'react'
import { ListContext, ListStateContext} from '../App'
import { Link } from 'react-router-dom'

export const List = () => {
  const listTitle = useContext(ListContext)
  const setListTitle = useContext(ListStateContext)

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
          <div className='flex justify-around font-semibold text-lg underline'>
            <div>Task No</div>
            <div>Title</div>
            <div>Delete</div>
          </div>
          <ul className='flex flex-col gap-y-2'>
            {
              listTitle.slice(1).map((item, index) => {
                return <li className='flex justify-around ' key={index}>
                <div className='font-semibold'>{item.taskNo}</div>
                <div className='font-semibold text-red-700 cursor-pointer break-all'><Link to={`/${item.taskNo}`}>{item.taskTitle}</Link></div>
                <div className='bg-red-500 font-semibold text-white px-3 rounded-xl cursor-pointer hover:bg-red-700' onClick={() => deleteTask(index+1)}>Delete</div>
                </li>
                })
            }
          </ul>
        </div>
    </div>
  )
}
