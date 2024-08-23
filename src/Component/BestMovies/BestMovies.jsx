import React from 'react'
import './BestMovies.css'
import best_movie from '../Assets/data/best_movie'
import Item from '../Item/Item'

const BestMovies = () => {
    return (
        <main>
            <section class="tv-series-area">
                <div class="tv-series-area-container">
                    <div class="tv-series-area-content">
                        <div class="title-top-movie">
                            <p>BEST TV SERIES</p>
                            <h1>World Best TV Series</h1>
                        </div>
                        <div class="movie-list">
                            <div class="ucm-movie">
                                <div class="ucm-movie-card">
                                    {best_movie.map((item, index) => {
                                        return <Item
                                            key={index}
                                            id={item.id}
                                            name={item.name}
                                            year={item.year}
                                            image={item.image}
                                            time_movie={item.time_movie}
                                            star_movie={item.star_movie} />
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

export default BestMovies