import React from 'react'
import foot1 from '../images/foot1.png'
import foot2 from '../images/foot2.png'
import foot3 from '../images/foot3.png'
import foot4 from '../images/foot4.png'
import foot5 from '../images/foot5.png'
import foot6 from '../images/foot6.png'
import foot7 from '../images/foot7.png'
const Footer = () => {
  return (
    <>
    <div className="container-fluid mt-3" style={{borderTop:"solid rgb(0,93,171)"}}>
        <div className="row">
            {/* <hr /> */}
            <div className='col-12 p-5'>
              <div className=" container d-flex flex-wrap m-auto justify-content-center gap-2" >
                <img src={foot1} alt="" />
                <img src={foot2} alt="" />
                <img src={foot3} alt="" />
                <img src={foot4} alt="" />
                <img src={foot5} alt="" />
                <img src={foot6} alt="" />
                <img src={foot7} alt="" />
              </div>
                <div className="d-lg-flex mt-3 justify-content-between">
                   <div className='col-lg- col-sm- d-lg-flex'>
                    <div className="d-flex col-12">
                   <input type="text" className='h-50 w-100 form-control border-primary'/>
                    <button className='btn w-75 butt h-50 text-white' style={{backgroundColor:"rgb(0,93,171)"}}>Send Now</button>
                    </div>
                    <div className='d-flex mx-auto p-3'>
                    <i className="fa-brands fa-instagram ms-4 fs-2 " style={{color:"rgb(0,93,171)"}}></i>
                    <i className="fa-brands fa-twitter ms-4 fs-2 " style={{color:"rgb(0,93,171)"}}></i>
                    <i className="fa-brands fa-facebook ms-4 fs-2 " style={{color:"rgb(0,93,171)"}}></i>
                    
                   </div>
                    </div>
                  <div className='d-flex'>
                  <ul className='list lh-lg'>
                        <li>Complaint Procedure</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                    </ul>
                    <ul className='ms-5 lh-lg list'>
                    <li>About</li>
                        <li>Jobs</li>
                        <li>Contact Us</li>
                    </ul>
                  </div>
                </div>

                  <p className='copy'>Copyright 2023. BARAZUKA SLOT. All Right Reserved</p>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer