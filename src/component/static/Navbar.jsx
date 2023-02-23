import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from '../pages/Login'
import img1 from '../images/img1.PNG'
import img2 from '../images/img2.PNG'
import img3 from '../images/img3.PNG'
import img4 from '../images/img4.PNG'
import logo from '../images/logo.PNG'


const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
  <nav className="navbar bg-body-tertiary fixed-top" style={{backgroundColor:"rgb(0,93,171)"}}>
  <div className="container">
    <img className="navbar-brand logo" src={logo} alt="" />
    <div className="d-flex justify-space-between" >
      <button className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:"rgb(35,134,228)"}} >Login</button>
      <Link to='/signup'><button className="btn text-white ms-5"  style={{backgroundColor:"rgb(101,204,48)"}}>Sign Up</button></Link>
      {/* <button></button> */}
    </div>
  </div>
</nav>
<div className='fixed-top topp' >

<nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgb(26,121,211)"}}>
  <div className="container ">
    <a className="navbar-brand text-white fs-4" href="/"><i className="fa-solid fa-house"></i></a>
    <a className="navbar-brand text-white fs-4" href="/">
      <i class="fa-sharp fa-solid fa-download"></i>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav spre">
        <li className="nav-item">
          <a className="nav-link  text-white mouse" aria-current="page"  onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>Sport<i className="fa-solid fa-angle-down"></i></a>

        </li>
        <li className="nav-item" >
          <Link className="nav-link text-white" to='/casino' >Casino</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/slot' >Slot</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/table' >Table</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Lottery</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/promotion' >Promotion</Link>

        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="container-fluid hover" style={show?{backgroundColor:"rgb(42,98,173)",display:"block"}:{backgroundColor:"rgb(42,98,173)",display:"none"}}>
        <div className="row">
          <div className=" imag">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
</div>

<Login/>

    </>
  )
}

export default Navbar