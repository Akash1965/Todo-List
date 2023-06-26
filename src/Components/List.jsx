import React, { useContext, useEffect, useState } from 'react'
import {ListContext} from '../App'

export const List = () => {
  const [title, setTitle] = useState([{}])
  const [count, setCount] = useState(0)
  const list = useContext(ListContext)
  useEffect(() => {
    setCount(prevState => prevState.count + 1)
    setTitle([{
      number: count,
      task: list,
    }])
    console.log(title.number)
    console.log(title.task)
  }, [])
  return (
    <div className='bg-gray-200 text-black px-4 py-6 my-10 w-96'>
        <div className='flex justify-between'>
            <span className='font-semibold'>{title.number}</span>
            <div className='font-semibold'>{title.task}</div>
            <div className='bg-red-500 font-semibold text-white px-3 rounded-xl cursor-pointer hover:bg-red-700'>Delete</div>
        </div>
    </div>
  )
}
