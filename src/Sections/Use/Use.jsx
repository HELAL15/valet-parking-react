import React from 'react'
import use from '../../Assets/Images/about.png'

export default function Use() {
  return (
    <>
        <section class="use">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 wow fadeInUp">
          <div class="text">
            <h4>طريقة استخدام التطبيق</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
          <a href="about.html" class="btn btn-primary">
            <span>المزيد</span>
            <i class="fas fa-plus mx-2"></i>
          </a>
        </div>
        <div class="col-md-6 wow fadeInUp d-flex back side">
          <div class="img side">
            <img src={use} alt="use" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
