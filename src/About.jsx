import React from 'react'
import logo from "./logo.png";

function About() {
  return (
    <div className='text-white grid text-left h-screen  lg:w-6/12 md:w-11/12 sm:w-11/12 m-auto  text-2xl'> 
    <img src={logo} alt="IOG Design Logo" className='w-32 h-32 mt-6 mb-6 m-auto bg-slate-900 '/>
     <section className="about-iog-design">
      <h2 >About IOG Design</h2>
      <br></br>
      <br></br>
      <p className='leading-relaxed'>
        IOG Design is a professional digital design and development firm delivering
        secure, scalable, and responsive web solutions for modern businesses. We
        specialize in creating high-quality web applications, templates, and digital
        experiences that support customer engagement and business growth.
      </p>
      <br />
      <p>
        Our team provides end-to-end full-stack development services, designing and
        deploying e-commerce platforms, single-page applications, and multi-page web
        solutions. We utilize proven technologies including Shopify and Amazon Web
        Services (S3, Cognito, Lambda, and DynamoDB) to ensure performance, security,
        and operational reliability.
      </p>
      <br />
      <p>
        IOG Design has partnered with leading organizations such as{" "}
        <strong>Under Armour, T-Mobile, Equinox, and the Toronto Jazz Festival</strong>,
        providing tailored digital solutions that align with business objectives and
        industry standards. We are committed to delivering dependable, results-driven
        products that meet the evolving needs of our clients.
      </p>
      <br />
      <p>
        For inquiries, please contact us at{" "}
        <a href="mailto:inquiry@iogdesign.com">inquiry@iogdesign.com</a>.
      </p>
      <br />
      <br></br>
       <p className='text-center text-sm'>
       Los Angeles, California 222 N Pacific Coast Hwy, El Segundo, CA 90245 All right reserved © 2025 IOG Design
      </p>
    </section>
 
    

 

 </div>




  )
}

export default About