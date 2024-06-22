import React, { useState } from 'react'
import { AppContext } from './context'
import Android from './Android'

const Google = () => {
    const [cmpname, setcmpname] = useState('Google')
    const nameHandler=(name)=>{
        setcmpname(name)
    }
  return (
    <main>
      <h1>Google</h1>
      <AppContext.Provider value={{cmpname,nameHandler}}>
        <Android />
      </AppContext.Provider>
    </main>
  )
}

export default Google
