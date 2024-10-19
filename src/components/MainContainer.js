import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
// import React from "react";
// import { useSelector } from "react-redux";
// import VideoTitle from "./VideoTitle";
// import VideoBackground from "./VideoBackground";
// import MovieList from "./MovieList"; // Make sure you import this

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//   if (!movies || movies.length === 0) {
//     return <div>No movies available</div>; // Safeguard against null or empty movies array
//   }

//   const mainMovie = movies[0];
//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div>
//       <VideoTitle title={original_title} overview={overview} />
//       <VideoBackground movieId={id} />
//       <MovieList title="Now Playing" movies={movies} /> {/* Add MovieList here */}
//     </div>
//   );
// };

// export default MainContainer;
