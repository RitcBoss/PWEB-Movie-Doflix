import React, { useState } from 'react'
import './TopMovies.css'
import all_movie from '../Assets/data/all_movie'
import Item from '../Item/Item'

const TopMovies = () => {

    const [typeMovie, setTypeMovie] = useState('All')

    const filterMovies = (type) => {
        if (type === 'All') {
            return all_movie
        };
        return all_movie.filter((item) => item.type_movie == type);
    }

    const filteredMovies = filterMovies(typeMovie)

    return (
        <main>
            <section class="top-rated-movie">
                <div class="top-rated-movie-container">
                    <div class="top-rated-movie-content">
                        <div class="title-top-movie">
                            <p>ONLINE STREAMIMG</p>
                            <h1>Top Rated Movies</h1>
                        </div>
                        <div class="center">
                            <button onClick={() => setTypeMovie('comedy')}> <p>COMEDY</p> </button>
                            <button onClick={() => setTypeMovie('romance')}> <p>ROMANCE</p> </button>
                            <button onClick={() => setTypeMovie('sport')}> <p>SPORT</p> </button>
                            <button onClick={() => setTypeMovie('action')}> <p>ACTION</p> </button>
                        </div>
                        <div class="movie-list">
                            <div class="ucm-movie">
                                <div class="ucm-movie-card">
                                    {filteredMovies.map((item, index) => {
                                        if (index < 8) {
                                            return <Item
                                                key={index}
                                                id={item.id}
                                                name={item.name}
                                                year={item.year}
                                                image={item.image}
                                                time_movie={item.time_movie}
                                                star_movie={item.star_movie} />
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TopMovies