import React from 'react'
import { Link } from 'react-router-dom'

const NetflixShows = () => {

  const shows=[
    {
      id:1010,
      name:"Narcos's"
    },
    {
      id:1020,
      name:"Money Heist"
    },
    {
      id:1030,
      name:"Stranger Things"
    }
  ]
  return (
    <div>
      <h1>Shows</h1>

      <ul>
        <li>
          <Link to="/shows/play/1010"></Link>
        </li>
        <li>
          <Link to="/shows/play/1020"></Link>
        </li>
        <li>
          <Link to="/shows/play/1030"></Link>
        </li>
        
        {
          shows.map((show)=>{
            return <li>
              <Link to={`/shows/play/${show.id}`}>{show.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default NetflixShows
