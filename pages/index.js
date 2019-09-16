import React from 'react'

const Home = () => ( 
  <div className="container">
    <div className="show-case">
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-8">

      <div className="row">
        <div className="col-md-2">
        <img src="../static/img/logo.png" alt="makethatapp logo"  height={200}></img>
      
        </div>
        <div className="col-md-8 mt-5 ml-5">
        <h4 className="mt-3">Learn to Build Fullstack Apps the right way</h4>
        <p>Learn to build apps from scratch with nothing excluded.</p>
          </div>
          <div className="col-md-2">

</div>
</div>

         
          
        </div>
        <div className="col-md-2">
          
        </div>
      </div>
    </div>


    <div className="video-section">
      <div className="row">
        <div className="col">
        <div className="embed-responsive embed-responsive-16by9">
  <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/eu0DVe7RkiY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
        </div>

        <div className="col">
          <h4>Put together to help you make that app yourself.</h4>
          <p>We have put together great content to help you deliver the best quality out of your App.</p>
          <div className="row">
            <div className="col">
            <p><a className="btn btn-lg btn-primary" href="#" role="button">Series</a></p>
            </div>
            <div className="col">
            <span><a className="btn btn-lg btn-info" href="#" role="button">Lessons</a></span>
          
              </div>
          </div>
          
            
       
       
        </div>
      </div>
    </div>
   
   
  
</div>
)

export default Home
