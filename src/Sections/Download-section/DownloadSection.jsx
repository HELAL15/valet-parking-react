import React from 'react'
import android from '../../Assets/Images/download-android.png'
import apple from '../../Assets/Images/download-apple.png'
import download from '../../Assets/Images/download.png'


export default function Download() {
  return (
    <>
        <section class="download py-5">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6 wow fadeInUp justify-content-center">
          <div class="img ">
            <img src={download} alt="about"/>
          </div>
        </div>
        <div class="col-md-6 wow fadeInUp one">
          <div class="text">
            <h4>تحميل التطبيق</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
          <div class="download-links d-flex">
            <a href="#">
              <img src={android} alt="download-android"/>
            </a>
            <a href="#">
              <img src={apple} alt="download-apple"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
