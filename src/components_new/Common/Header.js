import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import ServiceHeader from './ServiceHeader'
import IndustriesHeader from './IndustriesHeader'
import PlatformHeader from './PlatformHeader'
import ProcessHeader from './ProcessHeader'
import Cookies from 'universal-cookie';
import { init } from '@amplitude/analytics-browser';
import { track } from '@amplitude/analytics-browser';
class Header extends Component {
	
	    constructor(props) {
		super(props);
		
		
		
		
		
		
		this.createUUID = this.createUUID.bind(this);	
	}
	
	
	 createUUID(){
    		var dt = new Date().getTime();
    		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = (dt + Math.random()*16)%16 | 0;
        		dt = Math.floor(dt/16);
        		return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    		});
    		return uuid;
	}
	componentDidMount() {
		
	const cookies = new Cookies();
		var aid =  cookies.get('aid');
		if(aid == undefined){
			 var code = this.createUUID();
		 	cookies.set("aid",code,{ domain: '.qltech.com.au' , path: '/' });
		}	
		var url_action = window.location.href;
		init("30c4c799e1eda5b6cfe2d675f3b9e12e");
		console.log(document.title)
		const anid = cookies.get('aid');
		const eventProperties = {
		  location: url_action,
		anonymoudId: anid,
			pageName:document.title
			
		};
		console.log(eventProperties);
		track('Page Viewed', eventProperties);
		
    }
	
	render() {
		
		

		return (
			<>
				<StaticQuery
    query={graphql`
      query {
        allWordpressMenuLocation(filter: {menu: {slug: {eq: "main-menu"}}}) {
    edges {
      node {
        id
        menuData {
          items {
            ID
            slug
            title
            child_items {
              ID
              slug
              title
            }
          }
        }
      }
    }
  }
      }
    `}
    render={data => (
		<div>
		
    <header class="header" id="myHeader">
		<div class="container">
			<section class="wrapper_e">
				<div class="header-item-left">
					<a href="index.html" class="brand"><img src={logo} alt="logo" /></a>
				</div>
				<div class="header-item-center">
					<div class="overlay"></div>
					<nav class="menu" id="menu">
						<div class="menu-mobile-header">
							<button type="button" class="menu-mobile-arrow"><i class="ion ion-ios-arrow-back"></i></button>
							<div class="menu-mobile-title"></div>
							<button type="button" class="menu-mobile-close"><i class="ion ion-ios-close"></i></button>
						</div>
						<ul class="menu-section">
								{data &&
              data.allWordpressMenuLocation &&
              data.allWordpressMenuLocation.edges &&
              data.allWordpressMenuLocation.edges[0] &&
              data.allWordpressMenuLocation.edges[0].node &&
              data.allWordpressMenuLocation.edges[0].node.menuData.items &&
              data.allWordpressMenuLocation.edges[0].node.menuData.items.map(
                (prop,i) => {
					
					return (
						
						<li key={i} >
						{(prop.child_items ? (
						
							<>
								{(prop.slug == 'services' ? (
									<li className="nav-item dropdown position-static">
									<a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button"
									   data-toggle="dropdown">
									   Services
								   </a>
                           <ul className="dropdown-menu ">
                               <li className="service-menu">
                                   <ServiceHeader />
                               </li>
                               <li className="other-menu border-right">
                                   <span className="services-heading ">Industries</span>
                                   <span className="services-description mb-2">Discover how we're helping transform myriad industries to win tomorrow’s customer</span>
                                   <IndustriesHeader />
                               </li>
                               <li className="other-menu">
                                   <span className="services-heading ">Platforms</span>
                                   <span className="services-description mb-2">Explore possibilities and get the most from your technology stack</span>
									<PlatformHeader />
                               </li>
                           </ul>
                       </li>
								
								):(
								<>
									{(prop.slug == 'process' ? (<li className="nav-item dropdown position-static processMenu">
                           <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button"
                               data-toggle="dropdown">
                               Process
                           </a>
                           <ul className="dropdown-menu ">
                               <li className="service-menu service-menu-full">
                                    <ProcessHeader />
                                </li>
                              
                              
                           </ul>
                       </li>) : (<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="jacasvript:;">About</a>
								<ul className="dropdown-menu row">
								{prop && prop.child_items && prop.child_items.map((child, i) => {
								return (<li key={i} ><Link className="dropdown-item"   to={"/"+child.slug+"/"}>{child.title}</Link></li> )
							  })}</ul></li>))}	
								
								</>
								
								
								
								
								
								))}
							</>
						
							) : (<li className="nav-item">
							<Link className="nav-link" key={prop.id} to={"/"+prop.slug+"/"}>
								{prop.title}
							</Link>
                        </li>))}
						</li>
					
					)
                }
              )}	
                        
                    </ul>
					</nav>
				</div>

				<div class="header-item-right">
					
					<div class="cont_btn">
						<a href="#" class="cont_wraod">Contacts Us</a>
					</div>
					<button type="button" class="menu-mobile-toggle">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</section>
		</div>
	</header>
	<span className="top-space"></span>	
	</div>
    )}
  />
		</>	
		)
	}
}



export default Header





