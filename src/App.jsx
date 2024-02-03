import React, { useState } from 'react'
import { GlobalContext } from './context/Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateBlogs from './components/CreateBlogs'
import Blogs from './components/Blogs'
import BlogsView from './components/BlogsView'

export default function App() {


    const [blog, setBlog] = useState({
      id: 0,
      title: "",
      content: ""
    });

    const [blogs, setBlogs] = useState([]);

  return (
   <GlobalContext.Provider value = {[blog,setBlog,blogs,setBlogs]}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateBlogs />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:id' element={<BlogsView />} />
    </Routes>
    </BrowserRouter>
   </GlobalContext.Provider>
   
  )
}
