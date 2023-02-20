import React from 'react'

const Login = () => {
  return (
    <>
    <div className="modal " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:"rgb(0,93,171)"}}>
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel" >Welcome to MEGABAJI24</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" placeholder='Username' className='form-control shadow-none p-3 mb-3' />
        <input type="text" placeholder='Password' className='form-control shadow-none p-3 mb-3'/>
        <a href="/" className='text-dark'>Forgotten Password?</a>
        <button className='btn p-2 w-100 text-white mt-3' style={{backgroundColor:"rgb(101,204,48)"}}>Login Now</button>
        <p className='text-center'>Don't have an account? <a href="/" className='text-dark float-right'>Sign up now </a></p>
       
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Login