// import React from 'react'
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import { Link } from 'react-router-dom'

// export default function BreadCrumb() {
//   return (
//     <>
//      <header class="">
//     <div class="header-style"></div>

//     <section class="landing mt-0 h-100">
//       <div class="container h-100 ">
//       <Breadcrumb>
//       <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
//       <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//         Library
//       </Breadcrumb.Item>
//       <Breadcrumb.Item active>من نحن؟</Breadcrumb.Item>
//     </Breadcrumb>
//       </div>
//     </section>
//   </header>
//     </>
//   )
// }



import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

export default function BreadCrumb(props) {
  return (
    <>
      <header>
        <div className="header-style"></div>
        <section className="landing mt-0 h-100">
          <div className="container h-100  d-flex justify-content-center align-items-center">
            <Breadcrumb className='h-100 d-flex justify-content-center align-items-center'>
              <Breadcrumb.Item >
                <Link to='/'>الرئيسية</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{props.page_title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
      </header>
    </>
  );
}
