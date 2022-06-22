import { number } from 'prop-types';
import { getGenres } from './getGenres';

type Genre = {
    id: number
    name: string
}

export const preparingMovieDetails = (poster_path: string, overview: string, original_title: string, genre_ids?: number[]) => {
    const allGenres = getGenres();
    const titleStart = original_title.split(" ")[0];

    const imgSrc = "https://image.tmdb.org/t/p/original" + poster_path;
    const desciption = overview.slice(0, 150) + "...";
    const titleEn =
    titleStart === "The" || titleStart.length < 7
        ? original_title.split(" ", 2).join(" ")
        : original_title.split(" ", 1).join(" ");
    const genresOgjects = genre_ids?.map(genre => allGenres.filter((item: Genre) => item.id === genre));
    const genres = genresOgjects?.flat().map(item => item.name);

    return {
        imgSrc,
        desciption,
        titleEn,
        genres
       } 
}