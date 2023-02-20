import React from 'react'
import image1 from '../images/cricket.PNG'
import league from '../images/league.PNG'
import leag from '../images/leag.PNG'

const Landing = () => {
  return (
    <>
<div id="carouselExampleIndicators" class="carousel slide caro">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    {/* Second component */}
    <div className="container-fluid">
      <div className="row">
        <button className='btn text-white mx-auto w-25 mt-5 p-2' style={{backgroundColor:"rgb(247,129,243)"}}>Favourite</button>
      </div>

     <div className="d-lg-flex justify-content-between container mt-5">
     <div class="car" >
  <img src={league} class="card-img-top" alt="..."/>
    <button className='btn text-white w-50 btnn' style={{backgroundColor:"rgb(247,129,243)"}}>Dec 27 2023</button>
</div>

<div class="car" >
  <img src={leag} class="card-img-top" alt="..."/>
    <button className='btn text-white w-50 btnn' style={{backgroundColor:"rgb(247,129,243)"}}>Dec 27 2023</button>
</div>
     </div>
    </div>
    </>
  )
}

export default Landing