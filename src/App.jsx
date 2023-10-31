import './css/index.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import BlogsMain from './components/Blogs/BlogsMain'
import Blogpage from './components/Blogs/Blogpage'
import DeleteThisLater from './components/DeleteThisLater'
import AdminTable from './components/Admin/AdminTable'
import AdminNewPost from './components/Admin/AdminNewPost'


import Footer from "./components/Footer"
import AdminUpdatePost from './components/Admin/AdminUpdatePost'


function App() {

  return (
    <>
      <Navbar />


        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<BlogsMain />} />
          <Route path='/blogs/:slug' element={<Blogpage />} />
          <Route path='/admin' element={<AdminTable />} />
          <Route path='/admin/new-blog' element={<AdminNewPost />} />
          <Route path='/admin/edit/:updateID' element={<AdminUpdatePost/>} />
        </Routes>


      <DeleteThisLater />
      <Footer />
    </>
  )
}

export default App
