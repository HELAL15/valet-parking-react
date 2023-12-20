import React from 'react'
import header_img from '../../Assets/Images/header.png'
import Navbar from '../Navbar/Navbar'
// import './Header.css'


export default function Header() {
  return (
    <>
        <header class="header">
    {/* <!-- background-style for header --> */}
    {/* <!-- <img src="images/header-style.png" class="header-style" alt=""> --> */}
    <div class="header-style"></div>
    {/* <!-- ------------------------- --> */}
      <Navbar/>
    <section class="landing mt-0 h-100">
      <div class="container h-100">
        <div class="sec-title h-100">
          <h3>تطبيق الفاليه</h3>
          <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
            للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
        </div>
        <div class="img">
          <img src={header_img} alt=""/>
        </div>
      </div>
    </section>
  </header>
    </>
  )
}
