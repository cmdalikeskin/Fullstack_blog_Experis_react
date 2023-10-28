import { useEffect, useState } from 'react'
import axios from 'axios';
import '../../css/blog-overview.css'
import BlogItem from './BlogItem';

function Blogs() {
  // const [data, setData] = useState([
  //   {
  //     "id": 1,
  //     "slug": "book-one-slug",
  //     "bannerURL": "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?auto=format&fit=crop&q=80&w=2628&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "title": "Title One",
  //     "summary": "Summary One",
  //     "blogIntroduction": "blogIntro One",
  //     "blogBody": "blogBody One",
  //     "blogConclusion": "blogConc One",
  //     "createdAt": "2023-5-24T19:16:26.472+02:00",
  //     "updatedAt": "2023-10-24T19:16:26.472+02:00",
  //     "author": {
  //       "id": 4,
  //       "firstName": "Herman",
  //       "lastName": "Finkerst",
  //       "email": "hFinkerst@gmail.com",
  //       "createdAt": "2023-10-23T04:21:19.155+02:00",
  //       "updatedAt": "2023-10-23T04:21:19.155+02:00"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "slug": "book-two-slug",
  //     "bannerURL": "https://plus.unsplash.com/premium_photo-1668472170724-8b544ca3c86e?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "title": "Title Two",
  //     "summary": "Summary Two",
  //     "blogIntroduction": "blogIntro Two",
  //     "blogBody": "blogBody Two",
  //     "blogConclusion": "blogConc Two",
  //     "createdAt": "2023-10-24T19:16:51.876+02:00",
  //     "updatedAt": "2023-10-24T19:16:51.876+02:00",
  //     "author": {
  //       "id": 4,
  //       "firstName": "Herman",
  //       "lastName": "Finkerst",
  //       "email": "hFinkerst@gmail.com",
  //       "createdAt": "2023-10-23T04:21:19.155+02:00",
  //       "updatedAt": "2023-10-23T04:21:19.155+02:00"
  //     }
  //   }
  // ])

  const [data, setData] = useState([])
  console.log(data)
  
  const getAllBlogs = () => {
    axios.get("http://localhost:4000/blogs")
      .then((response) => {

        // console.log(response.data);
        setData(response.data)
      })
      .catch((error) => {

        console.error(error);
      });

  }

  useEffect(() => {
    getAllBlogs();
  }, [])




  return (
    <>


      <div className='blog-content-container'>

        <div>
          <h1>Blogs</h1>
        </div>

        <div>
          {data.map(content => (
            <BlogItem
              id={content.id}
              title={content.title}
              slug={content.slug}
              summary={content.summary}
              autFirstName={content.author.firstName}
              autLastName={content.author.lastName}
              created={content.createdAt}
              img={content.bannerURL}
              key={content.id}
            />
          ))}
        </div>


        {/*Single item*/}
        {/* <div className='blog-item-container'>
          <div className='blog-overview-left-container'>
            <img className='blog-overview-img' src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className='blog-overview-right-container'>
            <div className='blog-overview-top-container' >
              <h2>This is a title</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ullam amet odit, ex, fugit quod a sed praesentium consectetur, possimus repudiandae? </p>

            </div>
            <div className='blog-overview-bottom-container'>
              <div className='blog-overview-author'>
                <p>Author:</p>
                <p>Ali Keskin</p>
              </div>
              <div className='blog-overview-date'>
                <p>Uploaded on:</p>
                <p>5-4-2023</p>
              </div>
            </div>
          </div>
        </div> */}

        {/*End of single item*/}




      </div>
    </>
  )
}
export default Blogs