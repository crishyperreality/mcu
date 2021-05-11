export class Movie {
    movie_id: number;
    title: string;
    director: string;
    release_year: number;
    release_date: Date;
    chronology_year: number;
    description: string;
    released: boolean;
}

export type Movies = Movie[];