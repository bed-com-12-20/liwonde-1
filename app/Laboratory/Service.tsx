import React from 'react';
import './Service.css';
import logo from "../images/icon.png"
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';
import Button from '@/componets/Button';


function Service() {
  return (
    <>
    <Header/>
    <div className="zigege">
      <div className='tryit'>
      
      </div>
      <div className='sevdiv'>
      <Image
        src={logo}
        alt="Hospital Logo" 
        className="hospital-logo"
      />

      <div className="service-description">
        <h2 className="kulandila">WELCOME TO OUR HOSPITAL LAB SERVICE</h2>
        <p className="mawu">Our cutting-edge laboratory is dedicated to providing
         accurate and timely diagnostic testing to support your healthcare needs.
         From routine screenings to specialized tests, our expert team utilizes 
         state-of-the-art technology and follows stringent quality standards to 
         deliver reliable results you can trust</p>
        <span id='spanid'> We offer a wide range of laboratory tests, including
         blood tests, urine analysis, microbiology, and more, covering various
         medical specialties</span>
        <span id='spanid'> Our team of experienced laboratory professionals, 
        including technicians, scientists, and pathologists, is dedicated to 
        delivering exceptional service and personalized care to every patient</span>
        <span id='spanid'>Contact us today to learn more or schedule your 
        appointment. Your health is our priority</span>
      </div>
      </div>
      <Link href="/Appointment">
     <div className='divyabt'>
      <Button/>
     </div>
     </Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default Service;
