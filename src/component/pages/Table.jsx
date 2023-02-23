import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/cricket.PNG'
import slot1 from '../images/slot1.png'
import slot2 from '../images/slot2.png'
import slot3 from '../images/slot3.png'


const Table = () => {
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

<div className="container-fluid bg-white">
    <div className="d-lg-flex justify-content-between mt-2">
        <div className='d-flex ms-4 mx-auto'>
        <i class="fas fa-search fs-3 mt-2"></i>
            <input type="text" className='form-control h-75 w-100 text-white ms-2' style={{backgroundColor:"rgb(231,231,231)"}} placeholder='Search games' />
        </div>
        <div>
            <ul className='d-flex list-unstyled gap-4 mt-2'>
                <p className='nav-link'>Sort:</p>
                <li><Link className='nav-link'>Recommended</Link></li>
                <li><Link className='nav-link'>Latest</Link></li>
                <li><Link className='nav-link'>A-Z</Link></li>
            </ul>
        </div>
    </div>
</div>
<div className="container-fluid " style={{backgroundColor:"rgb(26,121,211)"}}>
    <div className="row">
       <div className="d-flex ">
       <div className='d-flex  gap-5 mx-auto mt-2 text-white'>
            <div>
            <input type="checkbox" />
            <label htmlFor="">KM</label>
            </div>
            <div>
            <input type="checkbox" />
            <label htmlFor="">JILI</label>
            </div>
            <div>
            <input type="checkbox" />
            <label htmlFor="">KA</label>
            </div>
        </div>
        <div className='mx-auto'>
            <button className='btn text-white ' style={{backgroundColor:"rgb(24,65,100)"}}>More Filters</button>
        </div>
       </div>
    </div>
</div>
<div className="container-fluid mt-5 p-3 ">
        <div className="row">
        <div className="d-flex flex-wrap gap-5 justify-content-center">
            {
                [
                    {img:slot1},
                    {img:slot2},
                    {img:slot3},
                
                ].map((val)=>(
            <div>
                <img className='w-100' src={val.img} alt="" />
            </div>
                ))
            }
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Table