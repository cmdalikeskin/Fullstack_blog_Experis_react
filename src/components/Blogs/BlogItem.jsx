import { useState } from "react"
import { Link } from "react-router-dom"

function BlogItem({ title, slug, summary, autFirstName, autLastName, created, img }) {

    const dateReformat = created.split("T")
    // console.log(dateReformat[0])


    return (
        <Link to={slug} className='blog-item-container' >
            <div className='blog-overview-left-container'>
                <img className='blog-overview-img' src={img}
                    alt=""
                />
            </div>
            <div className='blog-overview-right-container'>
                <div className='blog-overview-top-container' >
                    <h2>{title}</h2>
                    <p>{
                        (summary.length > 150) ? (`${summary.slice(0, 150)}...`)
                            : summary
                    }
                    </p>

                </div>
                <div className='blog-overview-bottom-container'>
                    <div className='blog-overview-author'>
                        <p><strong>Author:</strong></p>
                        <p>{`${autFirstName} ${autLastName}`}</p>
                    </div>
                    <div className='blog-overview-date'>
                        <p><strong>Uploaded on:</strong></p>
                        <p>{dateReformat[0]}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default BlogItem