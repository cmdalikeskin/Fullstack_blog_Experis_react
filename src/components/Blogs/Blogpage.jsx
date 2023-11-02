import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../../css/blogpost.css"
import Loading from "../Loading"

function Blogpage() {

  const slug = useParams()
  // console.log(slug)

  const [blogData, setBlogData] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [createdFormat, setCreatedFormat] = useState()
  const [updatedFormat, setUpdatedFormat] = useState()

  const getBlogBySlug = () => {
    axios.get(`http://localhost:4000/blogs/${slug.slug}`)
      .then((response) => {
        console.log(response.data);
        setBlogData(response.data)
        setCreatedFormat(response.data.createdAt.split("T"))
        setUpdatedFormat(response.data.updatedAt.split("T"))
        setIsloading(false)
      })
      .catch((error) => {

        console.error(error);
      });

  }

  useEffect(() => {
    getBlogBySlug();
  }, [])


  return (
    <>
      {isLoading ? (<Loading />) : (
        <div className="blogpage-container">
          <div className="blogpage-img-container">
            <img src={blogData.bannerURL} alt={blogData.title} />
          </div>

          <div className="blogpage-content-container">
            <div>
              <h1>{blogData.title}</h1>
            </div>

            <div className="blogpost-introduction">
              {blogData.blogIntroduction}
            </div>

            <div className="blogpost-body">
              {blogData.blogBody}
            </div>

            <div className="blogpost-conclusion">
              {blogData.blogConclusion}
            </div>

            <hr />

            <div className="blogpost-data-container">
              <p>Written by: <br />
                <i>
                  {`${blogData.author.firstName} ${blogData.author.lastName}`}
                </i>
              </p>
              <p>Uploaded on: <br />
                <i>
                  {`${createdFormat[0]}`}
                </i>
              </p>

              {createdFormat[0] == updatedFormat[0] ? ("")
                :
                (
                  <p>Last update: <br />
                    <i>
                      {`${updatedFormat[0]}`}
                    </i>
                  </p>
                )
              }

            </div>
          </div>
        </div>

      )
      }

    </>
  )
}
export default Blogpage