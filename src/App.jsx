import './App.css'
import React, { useState } from 'react'
import { List } from './Components/List'
import { TodoContainer } from './Components/TodoContainer'

export const TaskContext = React.createContext()
export const TaskStateContext = React.createContext()
export const ListContext = React.createContext()
export const ListStateContext = React.createContext()
export const DescriptionContext = React.createContext()
export const DescriptionStateContext = React.createContext()

function App() {
  const [title, setTitle] = useState('')
  const [list, setList] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className='flex flex-col'>
    <TaskContext.Provider value={title}>
      <TaskStateContext.Provider value={setTitle}>
        <DescriptionContext.Provider value={description}>
          <DescriptionStateContext.Provider value={setDescription}>
            <ListContext.Provider value={list}>
              <ListStateContext.Provider value={setList}>
                <TodoContainer/>
                <List/>
              </ListStateContext.Provider>
            </ListContext.Provider>
          </DescriptionStateContext.Provider>
        </DescriptionContext.Provider>
      </TaskStateContext.Provider>
    </TaskContext.Provider>
  </div>
  )
}

export default App
