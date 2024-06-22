import React, { useContext } from 'react'
import { AppContext } from './context'

const Os14 = () => {
    const {cmpname,nameHandler}=useContext(AppContext)
  return (
    <main>
      <h1>Os14</h1>
      <h2>{cmpname}</h2>
      <button onClick={()=>{
        nameHandler('Alpha')
      }}>Change Name</button>
    </main>
  )
}

export default Os14
