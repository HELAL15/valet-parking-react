import React from 'react'
import vip from '../../Assets/Images/02.png'


export default function Vip() {
  return (
    <>
        <section class="vip">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 wow fadeInUp d-flex  back">
          <div class="img">
            <img src={vip} alt="about"/>
          </div>
        </div>
        <div class="col-md-6 wow fadeInUp">
          <div class="text">
            <h4>من هم عملاء vip</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
          <a href="about.html" class="btn btn-primary">
            <span>المزيد</span>
            <i class="fas fa-plus mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
