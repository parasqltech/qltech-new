import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import FooterM1 from './FooterMenu_1'
import FooterM2 from './FooterMenu_2'
import FooterM3 from './FooterMenu_3'
import FooterM4 from './FooterMenu_4'
import FooterSocial from './FooterSocial'
import ContactSubscribe from '../Contact/ContactSubscribe'
import ReactWOW from 'react-wow'

const Footer = () => (
		<>
       <div><footer className="footer-area sky-gray-bg relative white padding-top" id="contact">
        <div className="area-bg"></div>
        <div className="footer-contant-us-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="section-heading"><span>Stay in the Know </span>
                            Discover Ideas &amp; Insights right in your inbox
                        </h3>
                        
                        <ContactSubscribe />
						<h3 className="section-heading mt-4"><span className="text-light d-inline" >Explore our <Link to="/hub"  className="text-white">Knowledge Hub</Link></span></h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-separator"></div>
        <div className="main-footer">
            <div className="container">

                <div className="row">
                    

                    <div className="col-xl-12">
                        <div className="row ">
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <ReactWOW   animation='fadeIn'>
								<div className="footer-widget  ">
                                    <p className="footer-widget-title">
                                        About
                                    </p>
                                    <FooterM1 />
                                </div>
                                </ReactWOW>
								
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <ReactWOW   animation='fadeIn'>
								<div className="footer-widget  ">
                                    <p className="footer-widget-title">
                                        Services
                                    </p>
                                    <FooterM2 />
                                </div>
                                </ReactWOW>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <ReactWOW   animation='fadeIn'>
								<div className="footer-widget">
                                    <p className="footer-widget-title">
                                        Industries
                                    </p>
                                    <FooterM3 />
                                </div>
                                </ReactWOW>
								
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <ReactWOW   animation='fadeIn'>
								<div className="footer-widget">
                                    <p className="footer-widget-title">
                                        Platforms
                                    </p>
                                    <FooterM4 />
                                </div>
								</ReactWOW>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row">
						<div className="col-md-4 text-center"> </div>
                        <div className="col-md-4 text-center">
                             <h6 className="text-white h4 mb-3">Follow us on</h6>
                                <FooterSocial />									
                        </div>
						<div className="col-md-4 text-end ">
							
						</div>
                    </div>
            </div>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-3 text-center"> 
					<a href="https://www.facebook.com/business/partner-directory/search?solution_type=campaign_management&id=739384113319180&section=overview" target="_blank">
							<img class="glogo" src="https://www.foundsm.com/wp-content/uploads/2022/01/Meta-Business-Partner-Logo.jpg.webp"/>
						</a>
					
					</div>
					<div className="col-md-3 text-center">
						<a href="https://www.credly.com/badges/a89e6d0c-c31f-4f98-88c1-e4ea7239e85d" target="_blank">
							<img class="glogo" src=" https://images.credly.com/size/680x680/images/a235db07-a757-4575-92ef-1087aaeacc8f/image.png"/>
						</a> 									
					</div>
					<div className="col-md-3 text-center ">
						<a href="https://www.google.com/partners/agency?id=2934919306" target="_blank">
							<img class="glogo" src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg"/>
						</a>
					</div>
				</div>
            </div>
           
            

        </div>
        <div className="footer-last">
            <div className="container">
                <div className="row mx-0 justify-content-between">
                    <p className="mb-0 pull-left company-copyright"> © {(new Date().getFullYear())} QL Tech. All Rights Reserved.
                        
                    </p>
                    <ul className="pull-right mb-0 footer other-links">
                        <li><Link to="/privacy-policy/">Privacy Policy</Link> |</li>
                        <li><Link to="/terms-and-conditions/">Terms and Conditions</Link> |</li>
                        <li><Link to="/disclaimer/">Disclaimer</Link> </li>
                       
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    </div>
    </>
    
)

export default Footer
