import React from "react"

 export default function Header(){
  return(
    <header id="header" className="d-flex align-items-center">
        <div className="container-fluid  d-flex align-items-center justify-content-lg-between">
          <p className="logo me-auto me-lg-0" style={{fontSize:"50px"}}><a href="index.html">༺ 𝕋𝔼𝕊𝕋</a></p>
          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li><a className="nav-link scrollto" href="#menu">Service</a></li>
              <li><a className="nav-link scrollto" href="#menu">Customer</a></li>
              <li><a className="nav-link scrollto" href="#menu">Contract</a></li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
        </div>
      </header>
  )
 } 
    
  