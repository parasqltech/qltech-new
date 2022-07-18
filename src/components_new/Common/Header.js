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
		<header className="header" id="myHeader">
		<div className="container">
			<section className="wrapper_e">
				<div className="header-item-left">
					<a href="index.html" className="brand"><img src={logo} alt="logo" /></a>
				</div>
				<div className="header-item-center">
					<div className="overlay"></div>
					<nav className="menu" id="menu">
						<div className="menu-mobile-header">
							<button type="button" className="menu-mobile-arrow"><i className="ion ion-ios-arrow-back"></i></button>
							<div className="menu-mobile-title"></div>
							<button type="button" className="menu-mobile-close"><i className="ion ion-ios-close"></i></button>
						</div>
						<ul className="menu-section">
								{data &&
              data.allWordpressMenuLocation &&
              data.allWordpressMenuLocation.edges &&
              data.allWordpressMenuLocation.edges[0] &&
              data.allWordpressMenuLocation.edges[0].node &&
              data.allWordpressMenuLocation.edges[0].node.menuData.items &&
              data.allWordpressMenuLocation.edges[0].node.menuData.items.map(
                (prop,i) => {
					
					return (
						
						<li key={i} className="menu-item-has-children">
						{(prop.child_items ? (
						
							<>
								{(prop.slug == 'services' ? (

									<>
									<a  href="javascript:void(0)" id="navbarDropdown" role="button"
									   data-toggle="dropdown">
									   Services <i className="ion ion-ios-arrow-down"></i>
								   </a>
								   <div className="menu-subs menu-mega menu-column-4">
								   	<div className="list-item">
								   		
                               <ServiceHeader />
                     
                    </div> 
                    <div className="list-item">
                           <div className="con_hed_m">
		      <a href="#" class="pd_15">
											<h4 class="title">Industries</h4>
											<ul>
												 <li>
													<p class="our_hed_v"><span class="services-description mb-2">Explore possibilities and get the most from your technology stack</span></p>
												</li>
											</ul>
										</a>
		      <div className="list_newsubmenu">
												
											
                            <IndustriesHeader />
		      </div>
		       </div>
                        
                    </div>
                    <div className="list-item">   
		      <div className="con_hed_m">
		      <a href="#" class="pd_15">
											<h4 class="title">Platforms</h4>
											<ul>
												 <li>
													<p class="our_hed_v"><span class="services-description mb-2">Explore possibilities and get the most from your technology stack</span></p>
												</li>
											</ul>
										</a>
		      <div className="list_newsubmenu">
                       
                            <PlatformHeader />  
                    </div>
		       </div>
                          </div>
                         </div>
                         </>

								
								):(
								<>
									{(prop.slug == 'process' ? (
									<>                           
									<a  href="javascript:void(0)" id="navbarDropdown" role="button"
                               data-toggle="dropdown">
                               Process <i className="ion ion-ios-arrow-down"></i>
                           </a>
                           <div class="menu-subs menu-mega menu-column-4">
															<div class="list-item">
																<div class="con_hed_m">
																<ProcessHeader />
																</div>
															</div>
														</div></>) : (
														<>
								<a  data-toggle="dropdown" href="jacasvript:;">About<i class="ion ion-ios-arrow-down"></i></a>
								<div class="menu-subs menu-column-1">
									<ul>
								{prop && prop.child_items && prop.child_items.map((child, i) => {
								return (<li key={i} ><Link className="dropdown-item"   to={"/"+child.slug+"/"}>{child.title}</Link></li> )
							  })}</ul></div></>))}	
								
								</>
								
								
								
								
								
								))}
							</>
						
							) : (<>
							<Link className="nav-link" key={prop.id} to={"/"+prop.slug+"/"}>
								{prop.title}
							</Link>
                        </>))}
						</li>
					
					)
                }
              )}	
                        
                    </ul>
					</nav>
				</div>

				<div className="header-item-right">
					
					<div className="cont_btn">
						<a href="#" className="cont_wraod">Contacts Us</a>
					</div>
					<button type="button" className="menu-mobile-toggle">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</section>
		</div>
	</header>
	
	</div>
    )}
  />
		</>	
		)
	}
}



export default Header





