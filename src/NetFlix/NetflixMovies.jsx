import React from 'react'
import { Link } from 'react-router-dom'

const NetflixMovies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        <li>
          <Link to="/movies/thriller">Thriller</Link>
        </li>
        <li>
          <Link to="/movies/comedy">Comedy</Link>
        </li>
      </ul>
    </div>
  )
}

export default NetflixMovies
