import { useEffect, useState } from 'react'
import axios from 'axios';
import '../../css/blog-overview.css'
import BlogItem from './BlogItem';
import { blogContextData } from '../BlogContext';
import Loading from '../Loading';

function Blogs() {
  const dataContext = blogContextData();

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setData(dataContext);
    setIsLoading(false);
  }, [dataContext]);

  return (
    <>
      <div className='blog-content-container'>
        <div>
          <h1>Blogs</h1>
        </div>
        <div>
          {isLoading ?
            <Loading />
            :
            data.map(content => (
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
            ))

          }
        </div>
      </div>
    </>
  )
}
export default Blogs