import React from 'react'
import subs from '../../Assets/Images/subs.png'

export default function Subscribe() {
  return (
    <>
        <section class="subscribe mb-5">
    <div class="container">
      <div class="subs-cont">
        <div class="row align-items-center">
          <div class="col-md-6 wow fadeInUp">
            <div class="text">
              <h4>اشترك ليصلك اخر التحديثات</h4>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
                للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
            </div>
          </div>
          <div class="col-md-6 wow fadeInUp">
            <form action="" class="">
              <div class="row gy-3 justify-content-end">
                <div class="col-md-12">
                  <input type="email" class="form-control" placeholder="البريد الالكتروني"/>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                  <button class="btn btn-primary subs-btn">اشتراك</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- this image for animation and style --> */}
    <img src={subs} alt="img style for section" class="subs-style"/>
    {/* <!-- ====================================================== --> */}
  </section>
    </>
  )
}
