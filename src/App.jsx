import { useState } from 'react'
import './App.css'

// here is the all my component
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Main from './component/Main'
import AllRouts from './Routes/AllRouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex justify-between gap-10 p-5 box-border h-screen'>
      {/* this is the side bar section */}
      <section className='w-1/5'>
        <Sidebar />
      </section>

      {/* this is the main section */}
      <section className='w-4/5'>
        <Main />
      </section>
    </main>
  )
}

export default App
