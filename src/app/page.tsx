import Header from './headfoot/Header'
import Blog from './blog/blog'
import Footer from './headfoot/Footer'
import BlogPage from './blog/blogpost'

export default function Home() {
  return (
    <div className='mx-0 w-screen'>
      <Header auth={false}/>
      <BlogPage/>
      <Footer/>
      {/* <Blog/> */}
      {/* <WebinarPage/> */}
      {/* <StorybookDetail/> */}
      {/* <NewBlog/> */}
      {/* <Footertwo /> */}
      {/* <Headertwo /> */}
      {/* <Webinar/> */}
      {/* <Ebooks/> */}
    </div>
  )
}
