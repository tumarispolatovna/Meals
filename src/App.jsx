import React, { createContext, useState } from 'react'
import Search from './components/Search'

export const MyContext = createContext()


const App = () => {
  const [search, setSearch] = useState('Food')


  return (
    <div className='container'>
      <Search setSearch={setSearch} />
    </div>


  )
}

export default App