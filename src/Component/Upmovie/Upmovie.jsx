import React, { useState } from 'react'
import './Upmovie.css'
import update_movie from '../Assets/data/update_movie'
import Item from '../Item/Item'

const Upmovie = () => {

    const [typeMovie, setTypeMovie] = useState('All')

    const filterMovies = (type) => {
        if (type === 'All') {
            return update_movie;
        }
        return update_movie.filter((item) => item.type_movie == type);
    }

    const filteredMovies = filterMovies(typeMovie)


    return (
        <main>
            <section class="ucm-bg">
                <div class="ucm-container">
                    <div class="ucm-content">
                        <div class="ucm-nav">
                            <div class="ucm-nav-left">
                                <h3>ONLINE STREAMIMG</h3>
                                <h1>Upcoming Movies</h1>
                            </div>
                            <div class="ucm-nav-right">
                                <div class="item"><button onClick={() => setTypeMovie('comedy')} >COMEDY</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('romance')} >ROMANCE</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('sport')} >SPORT</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('action')} >ACTION</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="ucm-movie">
                        <div class="ucm-movie-card">
                            {filteredMovies.map((item, index) => {
                                if (index < 4) {
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
            </section>
        </main>
    )
}

export default Upmovie