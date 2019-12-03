import * as React from "react";
import { Movie } from 'src/contracts';
import { PICS_BASE_URL } from 'src/constants';

export interface MoviesListItemProps {
    movie: Movie;
}
export const MoviesListItem: React.FC<MoviesListItemProps> = ({ movie }) => (
    <div className="movies-list-item">
        <img src={PICS_BASE_URL + movie.imageUrl} />
        <div>{movie.title}</div>
    </div>
);