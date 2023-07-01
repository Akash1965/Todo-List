import React, { useContext, useEffect} from 'react'
import { ListContext, ListStateContext} from '../App'

export const List = () => {
  const listTitle = useContext(ListContext)
  const setListTitle = useContext(ListStateContext)
  const list = listTitle.slice(1)
  useEffect(() => {
    console.log(list)
  },[list])

  return (
    <div className='bg-gray-200 text-black px-4 py-6 my-10 w-96'>
        <div className='flex justify-around fleex-col'>
            {
              list.map((item, index)=>{
                return <ul className='flex justify-around flex-col' key={index}>
                <li>
                <div className='font-semibold'>0</div>
              <div className='font-semibold text-red-700'>1</div>
              <div className='bg-red-500 font-semibold text-white px-3 rounded-xl cursor-pointer hover:bg-red-700'>Delete</div>
                </li>
                </ul>})
            }

        </div>
    </div>
  )
}
