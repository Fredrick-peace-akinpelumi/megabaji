import React from 'react'
import './promotion.css'
import promo1 from '../../images/promo1.png'
import promo2 from '../../images/promo2.png'
import promo3 from '../../images/promo3.png'
import promo4 from '../../images/promo4.png'

const Promotions = () => {
  return (
    <>
        

<nav className="navbar navbar-expand-lg fixed fixed-top" style={{backgroundColor:"rgb(0,93,171)"}}>
  <div className="container gap-3">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav1">
      <ul className="navbar-nav spre gap-3">
        {
          ["New Promotions","Slots","Casino","Sport","Lottery","Table","Others"].map((val)=>(

        <li className="nav-item">
            <button className='btn text-white shadow rounded-pill'  style={{backgroundColor:"rgb(101,204,48)"}}>{val}</button>
          {/* <a className="nav-link  text-white mouse" aria-current="page"  onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>Sport<i className="fa-solid fa-angle-down"></i></a> */}

        </li>
          ))
        }
      </ul>
    </div>
  </div>
</nav>

<div className="container-fluid p-lg-5 shift" >
  <div className="row">
    <div className="d-lg-flex flex-wrap justify-content-around gap-sm-3">
      <div className="col-lg-5 card  car">
        <img src={promo1} className='card-img' alt="" />
        <div className='card-body  d-flex justify-content-between'>
        <p>Gift point Exchange</p>
        <button className='btn btn-outline-success'>Long Term</button>
        </div>
        <div className='card-footer mt-5 bg-white gap-3 d-flex'>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Sign up Now</button>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Details</button>
        </div>
      </div>
      
      <div className="col-lg-5 card car">
        <img src={promo2} className='card-img' alt="" />
        <div className='card-body  d-flex justify-content-between'>
        <p>Refer A Friend</p>
        <button className='btn btn-outline-success'>Long Term</button>
        </div>
        <div className='card-footer mt-5 bg-white gap-3 d-flex'>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Sign up Now</button>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Details</button>
        </div>
      </div>

      <div className="col-lg-5 card car">
        <img src={promo3} className='card-img' alt="" />
        <div className='card-body  d-flex justify-content-between'>
        <p>Weekly Lucky Draw</p>
        <button className='btn btn-outline-success'>Long Term</button>
        </div>
        <div className='card-footer mt-5 bg-white gap-3 d-flex'>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Sign up Now</button>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Details</button>
        </div>
      </div>

      <div className="col-lg-5 card car">
        <img src={promo4} className='card-img' alt="" />
        <div className='card-body  d-flex justify-content-between'>
        <p>Birthday Bonus</p>
        <button className='btn btn-outline-success'>Long Term</button>
        </div>
        <div className='card-footer mt-5 bg-white gap-3 d-flex'>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Sign up Now</button>
        <button className='btn text-white rounded-2'  style={{backgroundColor:"rgb(101,204,48)"}}>Details</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Promotions