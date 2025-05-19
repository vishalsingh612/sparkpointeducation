import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import Heading from "../common/heading/Heading"
const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <Heading subtitle="insights from educators" title="master your exams with proven strategies" />
      <section className='blog '>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
