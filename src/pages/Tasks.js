import React from 'react'
import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'



const Tasks = () => {
  return (
    <div className='max-w-screen-2xl mx-auto p-10'>

        <div className="grid grid-cols-[65%_0.1%_34%]">
            <TaskList></TaskList>
            <div className="w-full h-screen bg-gray-300"></div>
            <TaskForm />

        </div>


    </div>
  )
}

export default Tasks