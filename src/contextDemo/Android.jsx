import React, { useContext } from 'react'
import { AppContext } from './context'
import Os14 from './Os14'

const Android = () => {
    const {cmpname}=useContext(AppContext)
  return (
    <main>
      <h1>Android</h1>
      <h2>{cmpname}</h2>
      <Os14 />
    </main>
  )
}

export default Android
