import * as React from 'react';
import './App.css';
import { RequestStatus, Movie, MovieResponseDTO } from './contracts';

interface AppState {
    movieList: any[];
    getMoviesStatus: RequestStatus;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = { 
            movieList: [],
            getMoviesStatus: "idle"
        };
    }

    private getMoviesSucceeded = (movies: Movie[]) => {
        this.setState({
            getMoviesStatus: "idle",
            movieList: movies
        });
    }

    private getMoviesFailed = (e: any) => {
        console.error(e);
        this.setState({getMoviesStatus: "error"});
    }

    private getMoviesAsync = async () => {
        this.setState({getMoviesStatus: "loading"});
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6723a43a0d554a924752c10b71b5b401&language=en-US&page=1");
            const moviesResponse: MovieResponseDTO = await response.json();
            console.log("result: " + JSON.stringify(moviesResponse));
            this.getMoviesSucceeded(
                this.extractMovieInfoFromDTO(moviesResponse)
            );
        } catch (e) {
            this.getMoviesFailed(e)
        }
    }

    private extractMovieInfoFromDTO (moviesResponse: MovieResponseDTO): Movie[] {
        const moviesDTO = moviesResponse.results;
        return moviesDTO.map(dto => ({
            id: dto.id,
            title: dto.title,
            description: dto.overview,
            releaseDate: new Date(dto.release_date),
            imageUrl: dto.poster_path
        } as Movie));
    }

    componentDidMount() {
        this.getMoviesAsync();
    }

    public render() {
        return (
            <div className="app">
                React Movies!
            </div>
        );
    }
}

export default App;
