import React, { createContext } from 'react'
import all_movie from '../Component/Assets/data/all_movie'


export const MovieContext = createContext(null);

const MovieContextProvider = (props)=>{
    const contextValue = {all_movie}

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;