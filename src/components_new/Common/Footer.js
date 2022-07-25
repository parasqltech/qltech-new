import React, { useState, useEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from 'gatsby'
import FooterM1 from './FooterMenu_1'
import FooterM2 from './FooterMenu_2'
import FooterM3 from './FooterMenu_3'
import FooterM4 from './FooterMenu_4'
import Reviews from './Reviews'
import FooterSocial from './FooterSocial'
import ReactWOW from 'react-wow'
import logo from '../../img/logo.png'
import google from '../../img/google.png'
import meta from '../../img/meta.png'
import certi from '../../img/certi.png'
import googleicon from '../../img/googleicon.png'
import axios from 'axios'




class Footer extends React.Component{
  
	componentDidMount() {
	   
	   
   }
	
	
            render (){
	
	    
		    
    return(
		<>
       <div>
	    <Reviews />
       <footer data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400">
    <div class="top_footer pt pb">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer_about">
                        <div class="footer_logo">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        </div>
                        <p class="footer_about_cont pt_20 pb_20" >We offer end-to-end solutions to help transform businesses - strategise, develop, automate & grow the brand’s online.</p>
                        <div class="list_social pb_20">
                           <FooterSocial />
                        </div>
                        <div class="google_logo">
                            <div class="google_img">
                                <a href="https://www.google.com/partners/agency?id=2934919306" target="_blank">
                                    <img src={google} alt="google" />
                                </a>
                                <div class="rating_">
                                    <div class="rat_text">40 Reviews</div>
                                    <div class="rat_star"><i class="fa fa-star" aria-hidden="true"></i></div>
                                    <div class="rat_star"><i class="fa fa-star" aria-hidden="true"></i></div>
                                    <div class="rat_star"><i class="fa fa-star" aria-hidden="true"></i></div>
                                    <div class="rat_star"><i class="fa fa-star" aria-hidden="true"></i></div>
                                    <div class="rat_star"><i class="fa fa-star" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="parner_ship_wirh pt_20 pb_20">
                            <h2 class=" pb_20">Partnership with</h2>
                            <ul>
                                <li><a href="#"><img src={meta} alt="meta" /></a></li>
                                <li><a href="https://www.credly.com/badges/a89e6d0c-c31f-4f98-88c1-e4ea7239e85d" target="_blank"><img src={certi} alt="certi" /></a></li>
                                <li><a href="https://www.google.com/partners/agency?id=2934919306" target="_blank"><img src={googleicon} alt="googleicon" /></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div  class="col-md-6 col-lg-3">
                            <div class="data_list">
                                <div class="title_list">
                                    <h4>About</h4>
                                    <FooterM1 />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div  class="col-md-6 col-lg-3">
                            <div class="data_list">
                                <div class="title_list">
                                    <h4>Services</h4>
                                    <FooterM2 />
                                </div>
                            </div>
                        </div>
                        <div  class="col-md-6 col-lg-3">
                            <div class="data_list">
                                <div class="title_list">
                                    <h4>Industries</h4>
                                    <FooterM3 />
                                </div>
                            </div>
                        </div>
                        <div  class="col-md-6 col-lg-3">
                            <div class="data_list">
                                <div class="title_list">
                                    <h4>Platforms</h4>
                                    <FooterM4 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom_footer pt_20 pb_20">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="cop_right">
                        <p>Copyright © 2022 <a href="#">QL Tech.</a> </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="list_terms">
                        <div class="resrved">
                            <p>All Rights Reserved</p>
                        </div>
                        <ul>
                            <li><a href="/terms-and-conditions/"> Terms and Conditions </a></li>
                            <li><a href="/privacy-policy/"> Privacy Policy</a></li>
                            <div class="clr"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
    </>
    )}
    
}

export default Footer
