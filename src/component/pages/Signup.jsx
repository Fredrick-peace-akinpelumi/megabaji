import React from 'react'
import i777 from '../images/777.PNG'

const Signup = () => {
  return (
    <>
      <div className="container sign p-5" style={{border:"solid thick rgb(0,93,171)"}}>
        <div className="row">
          <div className='d-flex justify-content-between'>
            <div className="container">
              <div className="col-">
          <h3 className='text-center mb-5 text-primary col-6 mx-auto' style={{borderBottom:"solid rgb(0,93,171)"}}>Sign up</h3>
          <input type="text" placeholder='Username' className='form-control mb-5 shadow-none p-3' style={{border:"ridge rgb(0,93,171)"}}/>
          <input type="text" placeholder='Password' className='form-control mb-5 shadow-none p-3' style={{border:"ridge rgb(0,93,171)"}}/>
          <input type="text" placeholder='Confirm Password' className='form-control mb-5 shadow-none p-3' style={{border:"ridge rgb(0,93,171)"}}/>
          <input type="text" placeholder='Ref Code' className='form-control mb-5 shadow-none p-3' style={{border:"ridge rgb(0,93,171)"}}/>
          <button className='btn p-2 w-50 text-white ' style={{backgroundColor:"rgb(0,93,171)"}}>Sign up now</button>
              </div>
            </div>
            <div className='ms-5 d-sm-none d-md-none d-lg-block none'>
              <img src={i777} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup