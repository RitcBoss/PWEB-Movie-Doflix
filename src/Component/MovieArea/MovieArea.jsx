import React, { useState } from 'react'
import './MovieArea.css'
import all_movie from '../Assets/data/all_movie'
import Item from '../Item/Item'

const MovieArea = () => {
    const [typeMovie,setTypeMovie] = useState('All')

    const filterMovies = (type)=>{
        if(type === 'All'){
            return all_movie
        }
        return all_movie.filter((item)=>item.type_movie == type)

    }
    const filteredMovies = filterMovies(typeMovie)

    return (
        <main>
            <section class="ucm-bg-movie-all">
                <div class="ucm-container">
                    <div class="ucm-content">
                        <div class="ucm-nav">
                            <div class="ucm-nav-left">
                                <h3>ONLINE STREAMIMG</h3>
                                <h1>New Release Movies</h1>
                            </div>
                            <div class="ucm-nav-right">
                                <div class="item"><button onClick={() => setTypeMovie('comedy')} >COMEDY</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('romance')} >ROMANCE</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('sport')} >SPORT</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('action')} >ACTION</button></div>
                                <div class="item"><button onClick={() => setTypeMovie('All')} >ALL</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="ucm-movie">
                        <div class="ucm-movie-card">
                            {filteredMovies.map((item, index) => {
                                if(index<12){
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

export default MovieArea