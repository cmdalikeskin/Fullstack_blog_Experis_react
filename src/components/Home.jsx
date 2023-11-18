import '../css/home.css'

function Home() {
  return (
    <>
      <div className="banner">
        <div className="hero-text">
          <h1>
            Welcome to <span id="hero-name">Ali's Blog</span>
          </h1>
        </div>

      </div>


      <div className='filler-content-home'>
        <div>
          <h2>Blog content holder</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci praesentium molestiae hic dignissimos perspiciatis neque dolorem, blanditiis pariatur cupiditate necessitatibus rerum commodi? Dolorem officia ea fuga eum adipisci corporis magni fugit ex, aut sit molestias delectus rerum a ad doloribus repudiandae incidunt voluptate deserunt! Rem voluptatum ab necessitatibus, nihil dolore ipsam. Omnis officia dignissimos eius dolorum, illo est sit. Vel veniam quibusdam, accusamus, adipisci dicta molestias provident necessitatibus magnam similique laboriosam voluptatem dolorum odit pariatur reiciendis explicabo architecto quo commodi asperiores sunt rem cum debitis dolor repudiandae quas. Aliquid ipsum neque cupiditate unde voluptatibus nam? Voluptatum aliquid commodi praesentium.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>

  )
}
export default Home