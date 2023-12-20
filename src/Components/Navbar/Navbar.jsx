import React, { useEffect, useRef, useState } from 'react'
// import './Navbar.css'
import logo from '../../Assets/Images/logo.png'
import { Link , NavLink } from 'react-router-dom'

export default function Navbar() {

  const [navOpen , setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);



  const handelNavBtn = ()=>{
    setNavOpen(!navOpen)
  }

  const handelCloseBtn = ()=>{
    setNavOpen(!navOpen)
  }


  useEffect(() => {
    const changeBG = () => {
      const scroll = window.scrollY;
      const isNavTop = scroll < 80;
      const nav = document.getElementById('nav');
      if (isNavTop) {
        nav.classList.remove('shadow');
      } else {
        nav.classList.add('shadow');
      }
    };

    window.addEventListener('scroll', changeBG);
    return () => {
      window.removeEventListener('scroll', changeBG);
    };
  }, []);


  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 991); 
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const closeNavOnMobile = (e) => {
    if (isMobile && navRef.current && !navRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('mousedown', closeNavOnMobile);
    }
    return () => {
      document.removeEventListener('mousedown', closeNavOnMobile);
    };
  }, [isMobile]);


  // const handlePageNavigation = () => {
  //   closeNavOnMobile();
  //   handelCloseBtn();
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg " id="nav" ref={navRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt=""/>
        </Link>
        <div className={`navbar-collapse ${
          navOpen ? 'active' : ''
        } `}>
          <div className={`collapse-header d-flex justify-content-between align-items-center p-2 mb-3 ${navOpen ? 'd-flex' : 'd-none'} `}>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt=""/>
            </Link>
            <i className="fas fa-close" id="close" onClick={handelCloseBtn}></i>
          </div>
          <ul className="navbar-nav m-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={closeNavOnMobile} to="/">الرئيسية</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={closeNavOnMobile} to="/about">من نحن</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={closeNavOnMobile} to="/services">الخدمات</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={closeNavOnMobile} to="/features">مميزات التطبيق</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={closeNavOnMobile} to="/contact">تواصل معنا</NavLink>
            </li>
          </ul>
          <Link onClick={closeNavOnMobile} to="/request" className="btn btn-primary my-2 " type="submit">طلب تسجيل مرفق</Link>
        </div>
        <button className="navbar-toggler" type="button" onClick={handelNavBtn}>
          <i className="fas fa-bars" id="open"></i>
        </button>
      </div>
    </nav>
    </div>
  )
}


