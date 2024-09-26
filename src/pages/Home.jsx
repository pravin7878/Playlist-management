import { useEffect, useState } from 'react'
import TaskCard from '../utilitys/TaskCard'
import data from '../app/store'

export default function Home() {
 
  const tasks = data
  // useEffect(() => {
  //   getTask()
  // }, [])

  return (
    <div className='w-[95%] m-auto flex flex-col gap-3 mt-2  overflow-y-auto scroll-smooth'>
        <h3>Well-Come</h3>
    </div>
  )
}
