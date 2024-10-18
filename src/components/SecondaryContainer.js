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

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // Check if movies.nowPlayingMovies exists and is an array
  if (!movies || !movies.nowPlayingMovies) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className='bg-black'>
      <div className='-mt-60 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.addPopularMovies} />
      <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
     </div>
    </div>
  );
};

export default SecondaryContainer;

