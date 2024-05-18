import React from 'react'
import { useParams } from 'react-router-dom'

const PlayShow = () => {
    const id=useParams().id;
    console.log(useParams());
  return (
    <div>
      <h1>Play Show:{id}</h1>
    </div>
  )
}

export default PlayShow
