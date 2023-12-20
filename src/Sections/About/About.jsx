import React from 'react'

import style1 from '../../Assets/Images/service-style.png'
import style2 from '../../Assets/Images/intro-style1.png'
import about from '../../Assets/Images/about.png'


export default function About() {
  return (
    <>
        <section class="about  mt-5">
    <div class="container">
      <div class="sec-title">
        <h3 class="mb-5">من نحن؟</h3>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6 wow fadeInUp">
          <div class="text">
            <h4>تطبيق الفاليه</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
          <a href="about.html" class="btn btn-primary">
            <span>المزيد</span>
            <i class="fas fa-plus mx-2"></i>
          </a>
        </div>
        <div class="col-md-6 wow fadeInUp d-flex  back side">
          <div class="img side">
            <img src={about} alt="about"/>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- those images for animation and style --> */}
    <img src={style1} alt="" class="about-style"/>
    <img src={style2} alt="" class="intro-style1"/>
    {/* <!-- ========================================== --> */}
  </section>
    </>
  )
}
