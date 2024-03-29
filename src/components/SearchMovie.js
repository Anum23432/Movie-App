import React, { useState } from 'react';

function SearchMovie() {
    //state input query,movies
    const [query, setQuery] = useState('');
    
    //creating the state for movies and update that state  appropriately.
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {
        e.preventDefault();
     console.log('submitting');
     /*const query='Jurassic Park';*/

    const url= `https://api.themoviedb.org/3/movie/550?api_key=99b305f1acafe2e214846d484e536786&language=en-US&query=${query}&page=1&include_adult=false`;
   try{
    const res = await fetch(url)
    const data = await res.json();
    setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}
    return (
        <>
        <form className='form' onSubmit = {searchMovies}>
            <label className='label' htmlFor='query'>Movie Name</label>
            <input className='input' type ='text' name='query' placeholder ='Jurassic Park' value = {query} onChange={(e)=>setQuery(e.target.value)}/><br/>
            <button className='button' type ='submit' >Search</button>
        </form>
        <div className='card-list'>
            {movies.map(movie => 
                 <div className='card'>
                   
                     <img className='card--image'  src={`https://www.imdb.com/title/tt0107290/mediaviewer/rm3913805824/${movie.poster_path}`} alt={movie.title + 'poster'}/>
                      <div className='card--content'>
                      <h3 className='card--title'>{movie.title}</h3>
                      <p><small>RELEASE DATE: {movie.release_date}</small></p>
                      <p><small>RATING: {movie.vote_average}</small></p>
                      <p className='card--desc'>{movie.overview}</p>
                  </div>
                 </div> 
                )}
            

        </div>
        </>
    )
}
export default SearchMovie;
