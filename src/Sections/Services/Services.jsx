import React from 'react'
import icon from '../../Assets/Images/service.svg'
import style from '../../Assets/Images/service-style.png'

export default function Services() {
  return (
    <>
        <section class="services">
    <div class="container">
      <div class="sec-title">
        <h3 class="mb-5">الخدمات</h3>
      </div>
      <div class="row gy-4">
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img-card">
              <img src={icon} alt=""/>
              <i class="fa-regular fa-handshake"></i>
            </div>
            <h4>الخدمة تكتب هنا</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img-card">
              <img src={icon} alt=""/>
              <i class="fa-regular fa-handshake"></i>
            </div>
            <h4>الخدمة تكتب هنا</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img-card">
              <img src={icon} alt=""/>
              <i class="fa-regular fa-handshake"></i>
            </div>
            <h4>الخدمة تكتب هنا</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- this image for animation and style --> */}
    <img src={style} alt="" class="service-style"/>
    {/* <!-- ============================================ --> */}
  </section>
    </>
  )
}
