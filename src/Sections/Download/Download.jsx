import React from 'react'
import android from '../../Assets/Images/download-android.png'
import apple from '../../Assets/Images/download-apple.png'

export default function Download() {
  return (
    <>
        <section class="download margin-t">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12 wow fadeInUp  justify-content-center">
          <div class="download-links d-flex justify-content-center">
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
