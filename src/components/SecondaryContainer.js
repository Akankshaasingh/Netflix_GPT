// import React from 'react'
// import { useSelector } from 'react-redux'
// import MovieList from './MovieList';

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);
//   return (
//     <div>
//       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
//     </div>
//   )
// }

// export default SecondaryContainer
import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { addTopRatedMovies, addUpcomingMovies } from '../utils/moviesSlice';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);


  if (!movies || !movies.nowPlayingMovies || !addTopRatedMovies || !addUpcomingMovies) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className='bg-black'>
      <div className='-mt-60 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.addTopRatedMovies} />
      <MovieList title={"Popular Movies"} movies={movies.addPopularMovies} />  
      <MovieList title={"UpComing  Movies"} movies={movies.addUpcomingMovies} />
     </div>
    </div>
  );
};

export default SecondaryContainer;

