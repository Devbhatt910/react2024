import React, { useState } from 'react'
import css from './MovieImdbApi.css'
import axios from 'axios';

export const MovieImdbApi = () => {

    const [movie, setmovie] = useState();
    const [inputmovie, setinputmovie] = useState("")


    const fetchMovie=async ()=>{
        const res=await axios.get("https://moviedatabase8.p.rapidapi.com/Search/"+inputmovie,{
            headers: {
                'x-rapidapi-key': 'b40002837emshd22b47e9d7dcd9ep179fadjsn780e615a6c5d',
                'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
            }
        })
        setmovie(res.data[0])
    };
return (
    <body className={css.body}>

        <input type='text' onChange={(e)=>{setinputmovie(e.target.value)}}></input>
        <button onClick={()=>{
            fetchMovie();
        }}>Fetch Movie</button>

        {movie && (
            <div>
                    <h1 className={css.h1}>{movie.title}</h1>
                    <img src={movie.poster_path} alt="IMG" height="500px" width="400px"/>
                    <div style={{marginTop:"20px"}}>
                                <p className={css.p}>{movie.overview}</p>
                                <hr className={css.hr}/>
                                <p className={css.p}>Movie Earnings  :  {movie.revenue} $</p>
                                <hr className={css.hr}/>
                                <p className={css.p}>Movies Languages :  {movie.spoken_languages}</p>
                                <hr className={css.hr}/>
                                <p className={css.p}>Movie Budget  :    {movie.budget} $</p>
                    </div>
        </div>
        )}
    </body>

  )
}


