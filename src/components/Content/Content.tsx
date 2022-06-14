import { MovieProps } from '../../App';
import { MovieCard } from '../MovieCard/MovieCard';

import './content.scss';
import '../../styles/global.scss'

interface ContentProps {
  listMovies: MovieProps[]
}

export function Content({ listMovies }: ContentProps) {

  return (
    <div className="movies-list">
      {listMovies.map(movie => (
        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  )
}