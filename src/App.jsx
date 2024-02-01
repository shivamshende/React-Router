import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import NoMatch from './components/NoMatch'
// import Github from './components/Github'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route >
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
        </Route>
        <Route path='about' element={<About />} />
        {/* <Route path='github' element={<Github />} /> */}

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
