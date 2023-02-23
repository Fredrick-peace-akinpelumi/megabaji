import React from 'react'
import field from '../../images/field.png'
import './game.css'

const Game1 = () => {
  return (
    <>
    <div className="container-fluid field">
      <div className="row">
        <img className='w-100' src={field} alt="" />
      </div>
    </div>
    <div className="container-fluid mt-1 p-2" style={{backgroundColor:"rgb(0,93,172)"}}>
      <div className='d-flex justify-content-between text-white'>
      <div className='mt-2 ms-2'>
        <b>Sport Highlights</b>
      </div>
      <div className='d-flex mx-4'>
        <b className='mt-2' style={{width:"15vh"}}>View by</b>
        <select className=' form-select shadow-none' name="" id="">
          <option value="" disabled>Time</option>
          <option value="" >9:00</option>
        </select>
      </div>
      </div>
    </div>
    </>
  )
}

export default Game1