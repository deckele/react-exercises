export type RequestStatus = "idle" | "loading" | "error";
export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    imageUrl: string;
}
export interface MovieResponseDTO {
    page: number,
    total_results: number,
    total_pages: number,
    results: MovieDTO[]
}
export interface MovieDTO {
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