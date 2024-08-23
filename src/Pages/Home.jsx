import React from 'react'
import Banner from '../Component/Banner/Banner'
import Upmovie from '../Component/Upmovie/Upmovie'
import Service from '../Component/Service/Service'
import TopMovies from '../Component/TopMovies/TopMovies'
import Streaming from '../Component/Streaming/Streaming'
import BestMovies from '../Component/BestMovies/BestMovies'
import Letter from '../Component/Letter/Letter'

const Home = () => {
  return (
    <>
        <Banner/>
        <Upmovie/>
        <Service/>
        <TopMovies/>
        <Streaming/>
        <BestMovies/>
        <Letter/>
    </>
  )
}

export default Home