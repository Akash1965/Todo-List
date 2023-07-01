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
  const [description, setDescription] = useState('')
  const [task, setTask] = useState([{
    taskNo: 0,
    taskTitle: '',
  }])
  return (
    <div className='flex flex-col'>
    <TaskContext.Provider value={title}>
      <TaskStateContext.Provider value={setTitle}>
        <DescriptionContext.Provider value={description}>
          <DescriptionStateContext.Provider value={setDescription}>
            <ListContext.Provider value={task}>
              <ListStateContext.Provider value={setTask}>
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
