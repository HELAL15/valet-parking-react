import React from 'react'
import footer_img from '../../Assets/Images/footer.png'
import { Link , NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
<footer class="py-5">
    <div class="container">
      <div class="footer-logo wow fadeInUp">
        <img src={footer_img} alt=""/>
      </div>
      <ul class="footer-nav wow fadeInUp d-flex justify-content-evenly flex-wrap gap-2">
        <li class="nav-item mx-2">
          <NavLink class="nav-link"  to="/">الرئيسية</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/about">من نحن</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/services">الخدمات</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/features">مميزات التطبيق</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/request">طلب تسجيل خدمة</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/contact">تواصل معنا</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink class="nav-link" to="/rules">الشروط والاحكام</NavLink>
        </li>
      </ul>
    </div>
  </footer>
    </>
  )
}
