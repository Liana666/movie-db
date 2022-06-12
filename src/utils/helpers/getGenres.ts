import { defaultGenres } from './../constants/defaultGenres';
import { genresApi } from './../../store/api/genresApi';

export const getGenres = () => {
    const {data, isError, isLoading, isSuccess} = genresApi.useGetGenresQuery({});
    
    if(isError || isLoading) {
        return defaultGenres;
    }

    if(isSuccess) {
        return data;
    }
}