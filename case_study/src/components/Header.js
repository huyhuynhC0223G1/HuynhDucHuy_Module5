import React from "react";

function Header(){
    return(
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0"><a href="index.html">FURAMA</a></h1>
          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
              <li><a className="nav-link scrollto" href="#events">Events</a></li>
              <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="/#"><span>Service</span> <i className="bi bi-chevron-down" /></a>
                <ul>
                  <li><a href="/#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="/#"><span>Accompanied service</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="/#">Pool</a></li>
                      <li><a href="/#">Car rental</a></li>
                      <li><a href="/#">Cuisine</a></li>
                    </ul>
                  </li>
                  <li><a href="/#">Home</a></li>
                  <li><a href="/#">Room</a></li>
                  <li><a href="/#">Villa</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
        </div>
      </header>
    );
}

export default Header;