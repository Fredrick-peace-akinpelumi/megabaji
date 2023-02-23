import React from 'react'
import caro2 from '../images/caro2.png'
import slot1 from '../images/slot1.png'
import slot2 from '../images/slot2.png'
import slot3 from '../images/slot3.png'
import slot4 from '../images/slot4.png'
import slot5 from '../images/slot5.png'
import slot6 from '../images/slot6.png'
import slot7 from '../images/slot7.png'
import slot8 from '../images/slot8.png'
import slot9 from '../images/slot9.png'
import slot10 from '../images/slot10.png'
import slot11 from '../images/slot11.png'
import slot12 from '../images/slot12.png'

const Slot = () => {
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
      <img src={caro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={caro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={caro2} class="d-block w-100" alt="..."/>
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

    <div className="container-fluid mt-5 p-3 ">
        <div className="row">
        <div className="d-flex flex-wrap gap-5 justify-content-center">
            {
                [
                    {img:slot1},
                    {img:slot2},
                    {img:slot3},
                    {img:slot4},
                    {img:slot5},
                    {img:slot6},
                    {img:slot7},
                    {img:slot8},
                    {img:slot9},
                    {img:slot10},
                    {img:slot11},
                    {img:slot12},
                
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

export default Slot