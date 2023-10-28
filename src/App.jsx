import './css/index.css'
import {Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './components/Home'
import BlogsMain from './components/Blogs/BlogsMain'
import Blogpage from './components/Blogs/Blogpage'
import AdminMain from './components/Admin/AdminMain'
import DeleteThisLater from './components/DeleteThisLater'
import AdminTable from './components/Admin/AdminTable'

import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<AdminTable />} />
        <Route path='/blogs' element={<BlogsMain />} />
        <Route path='/blogs/:slug' element={<Blogpage />} />
        <Route path='/admin' element={<AdminMain />} />
      </Routes>

      <DeleteThisLater />
      <Footer />
    </>
  )
}

export default App
