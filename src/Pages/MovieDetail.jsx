import React, { useContext } from 'react'
import BestMovies from '../Component/BestMovies/BestMovies'
import DetailArea from '../Component/DetailArea/DetailArea'
import { MovieContext } from '../Context/MovieContext'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const { all_movie } = useContext(MovieContext);
    const { movieId } = useParams();
    const movie = all_movie.find((e) => e.name === movieId)
    return (
        <>
            <DetailArea movie={movie} />
            <BestMovies />

        </>
    )
}

export default MovieDetail