import React from "react"
import { withPrefix, Link } from "gatsby"
import Helmet from 'react-helmet'
import ReactWOW from 'react-wow'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import $ from "jquery";
import Layout from '../components_new/Layout'
import Particles from "react-tsparticles";
import home_section from '../img/home/home-section-1-img.png';
import home_section_bg from '../img/home/home-section-1-img-background.png';
import about_us from '../img/about-us.png';
import pro_1 from '../img/Inbound-Methodology.png';
import pro_2 from '../img/Integrated-Thinking-or-Systems-Thinking-3.png';
import pro_3 from '../img/OKR.png';
import pro_4 from '../img/sostac.png';
import ico_4 from '../img/icon-4.png';
import ico_3 from '../img/icon-3.png';
import ico_2 from '../img/icon-2.png';
import LazyLoad from 'react-lazyload';
import ClientSlider from '../components_new/Home/ClientSlider'
import OurServicess from '../components_new/Home/OurServicess'
import HomeService from '../components_new/Home/HomeService'
import NeedUs from '../components_new/Home/NeedUs'
import HomeTestimonial from '../components_new/Home/HomeTestimonial'
import WorkDefineUs from '../components_new/Home/WorkDefineUs'
import HomeAboutUs from '../components_new/Home/HomeAboutUs'
import HomeBlog from '../components_new/Home/HomeBlog'
import HomePartner from '../components_new/Home/HomePartner'
import HomeWork from '../components_new/Home/HomeWork'
import ContactFront from '../components_new/Contact/ContactFront'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ser1 from '../img_new/ser1.png'
import ser2 from '../img_new/ser2.png'
import ser3 from '../img_new/ser3.png'
import ser4 from '../img_new/ser4.png'
import ser5 from '../img_new/ser5.png'
import ser6 from '../img_new/ser6.png'
import QL_Loop from '../img_new/QL_oop.gif'


if (typeof document !== `undefined`) {
    AOS.init()
  } 
const IndexPage = () => (


    <Layout>
    
        <Helmet>
        <title>Web Development & Digital Marketing Services In Perth, Australia - QL Tech</title>
        <meta name="title" content="Web Development & Digital Marketing Services In Perth, Australia - QL Tech"></meta>
        <meta name="description" content="QL Tech Is a Leading Digital Agency. Our Services Include Web Development, Wordpress Development, Website Design, Infusionsoft, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Perth, Australia"></meta>
         <meta name="keywords" content="Web development services, infusionsoft service, zoho crm service, digital marketing services, wordpress development, seo services, web design services, social media marketing, graphic design, magento development company"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Web Development & Digital Marketing Services In Perth, Australia - QL Tech"></meta>
        <meta property="og:description" content="QL Tech Is a Leading Digital Agency. Our Services Include Web Development, Wordpress Development, Website Design, Infusionsoft, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Perth, Australia"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="Web Development & Digital Marketing Services In Perth, Australia - QL Tech"></meta>
        <meta property="twitter:description" content="QL Tech Is a Leading Digital Agency. Our Services Include Web Development, Wordpress Development, Website Design, Infusionsoft, Social Media Marketing & SEO. Get Assured Leads & Sales Ensuring amplified ROI For Your Business Through PPC, Content Marketing & More In Perth, Australia"></meta>
        </Helmet>
        
     <div className="bg">
        <div className="area-bg">
            <Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
        
     <section className="sec01 pt pb">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6">
                    <div className="main_heading">
                    <ReactWOW  delay='0.3s' animation='fadeInUp'>
                    <h1 className="heading-main">
                        <span className="d-block">Expert Caretakers to Help</span> 
                       <Typewriter
                          options={{
                            strings: ['Make digital work','Engage and wow customers','Get ready for the next','Embrace analytics'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                    </h1>
                    </ReactWOW>
                        
                        <div className="cont_wrap pt_20 pb_20">
                            <p>Boost your customer relationships with the power of highly contextual emails by implementing customised CRM and CDP platforms. Make your products or services easier to sell and enhance your business's outreach with automated utility apps designed as per your requirements.</p>
                            <div className="btn_form ">
                            <Link to={"https://www.qltech.com.au/schedule-a-call/"} className="main_btn">Book Your Session</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                   <div class="img_loop">
                        <img src={QL_Loop} />
                    </div>
                </div>
            </div>
        </div>
    </section> 
   
   <LazyLoad height={200} >
    <WorkDefineUs />
    </LazyLoad>
    <LazyLoad height={200} >
    <NeedUs />
    </LazyLoad>
    <LazyLoad height={200} >
    <OurServicess />
    </LazyLoad>
    <LazyLoad height={300} >
    <HomeAboutUs />
    </LazyLoad>
    <LazyLoad height={200} >
    <ReactWOW   animation='fadeIn'>
     
    </ReactWOW>
    </LazyLoad>
    <LazyLoad height={200} >
    </LazyLoad>
    <LazyLoad height={200} >
    <HomeTestimonial />
    </LazyLoad>
   <ContactFront />
    <LazyLoad height={200} >

    </LazyLoad>
    <LazyLoad height={200} >
    </LazyLoad>
    </Layout>
)

export default IndexPage