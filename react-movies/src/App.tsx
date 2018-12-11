import * as React from 'react';
import './App.css';

export interface AppState {
    movieList: any[];
    getMoviesStatus: RequestStatus;
}
export type RequestStatus = "idle" | "loading" | "error";
export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    image: string;
}
interface MovieResponseDTO {
    page: number,
    total_results: number,
    total_pages: number,
    results: MovieDTO[]
}
interface MovieDTO {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
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
            this.getMoviesSucceeded(this.extractMovieInfoFromDTO(moviesResponse));
        } catch (e) {
            this.getMoviesFailed(e)
        }
    }

    private extractMovieInfoFromDTO (moviesResponse: MovieResponseDTO): Movie[] {
        return [];
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
