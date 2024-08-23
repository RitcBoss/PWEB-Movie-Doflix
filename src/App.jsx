import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer/Footer'
import MovieDetail from './Pages/MovieDetail'
import Breadcrumb from './Component/Breadcrumb/Breadcrumb'
import Movie from './Pages/Movie'
import Pricing from './Pages/Pricing'
import ScrollToTop from './Component/ScrollToTop/ScrollToTop'


const App = () => {
  return (

    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/movie/:movieId' element={<MovieDetail />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App