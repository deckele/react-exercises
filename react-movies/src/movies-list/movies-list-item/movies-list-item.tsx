import * as React from "react";
import { Movie } from 'src/contracts';

export interface MoviesListItemProps {
    movie: Movie;
}
export const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie }) => (
    <div className="movies-list-item">
        <img src={movie.imageUrl} />
        <div>{movie.title}</div>
    </div>
);