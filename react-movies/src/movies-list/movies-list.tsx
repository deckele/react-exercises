import * as React from "react";
import { Movie } from 'src/contracts';
import { MoviesListItem } from './movies-list-item/movies-list-item';

export interface MoviesListProps {
    movies: Movie[];
}
export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
    <div className="movies-list">
        {movies.map(movie => (
            <MoviesListItem movie={movie} key={movie.id} />
        ))}
    </div>
);