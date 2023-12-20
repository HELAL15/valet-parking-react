import React from 'react'
import feature1 from '../../Assets/Images/feature1.svg'
import feature2 from '../../Assets/Images/feature2.svg'
import feature3 from '../../Assets/Images/feature3.svg'



export default function Features() {
  return (
    <>
        <section class="features py-5">
    <div class="container">
      <div class="sec-title">
        <h3>مميزات التطبيق</h3>
        <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
          أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
      </div>
      <div class="row gy-4">
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature1} alt="" class=""/>
            </div>
            <h4>سهولة الاستخدام</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature2} alt="" class=""/>
            </div>
            <h4>المرونة</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature3} alt="" class=""/>
            </div>
            <h4>سير عمل قوي</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature1} alt="" class=""/>
            </div>
            <h4>سهولة الاستخدام</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature2} alt="" class=""/>
            </div>
            <h4>المرونة</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp">
          <div class="card">
            <div class="img">
              <img src={feature3} alt="" class=""/>
            </div>
            <h4>سير عمل قوي</h4>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
