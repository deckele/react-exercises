import React, { useState, useEffect } from 'react';
import './App.css';
import { RequestStatus, Movie, MovieResponseDTO } from './contracts';
import { Header } from './header/header';
import { MoviesList } from './movies-list/movies-list';

const App: React.FC = () => {
    const [ movieList, setMovieList ] = useState([] as Movie[]);
    const [ , setGetMoviesStatus ] = useState("idle" as RequestStatus);

    useEffect(() => {
        getMoviesAsync();
    }, []);

    function getMoviesSucceeded(movies: Movie[]) {
        setMovieList(movies);
        setGetMoviesStatus("idle");
    }

    function getMoviesFailed(e: any) {
        console.error(e);
        setGetMoviesStatus("error");
    }

    async function getMoviesAsync() {
        setGetMoviesStatus("loading");
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6723a43a0d554a924752c10b71b5b401&language=en-US&page=1");
            const moviesResponse: MovieResponseDTO = await response.json();
            console.log("result: " + JSON.stringify(moviesResponse));
            getMoviesSucceeded(
                extractMovieInfoFromDTO(moviesResponse)
            );
        } catch (e) {
            getMoviesFailed(e)
        }
    }

    function extractMovieInfoFromDTO (moviesResponse: MovieResponseDTO): Movie[] {
        const moviesDTO = moviesResponse.results;
        return moviesDTO.map(dto => ({
            id: dto.id,
            title: dto.title,
            description: dto.overview,
            releaseDate: new Date(dto.release_date),
            imageUrl: dto.poster_path
        } as Movie));
    }

    return (
        <div className="app">
            <Header>
                React Movies!!
            </Header>
            <MoviesList movies={movieList} />
        </div>
    );
}

export default App;
