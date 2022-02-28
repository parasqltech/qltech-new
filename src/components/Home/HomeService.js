import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import ReactWOW from 'react-wow'
const HomeService = () => (
  <StaticQuery
    query={graphql`
      query {
   allWpHomeService (limit: 5){
    edges {
      node {
        id
		slug
        HomeServices {
          descprition
          title
		  icon{
			  sourceUrl
		  }
        }
        
        link
      }
    }
  }
      }
    `}
     render={data => {
      return (
        <div>
       <section className="home-services-section bg-white">
        <div className="container">
            <div className="section-icons">
              
                <div className="icon-one"></div>
              
                <div className="icon-two"></div>
              
                <div className="icon-three"></div>
            </div>

            <div className="auto-container">

                <div className="row">
                    <div className="col-lg-4">
                    <span className="sub-heading d-block mb-0 ">Services</span>
                        <h2 className="section-heading text-left">
                            <span className="text-left mb-2">
                                
                            </span>
                            Solutions to transform your business
                        
                        </h2>
                        
                    </div>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">

                        
                             {data &&
              data.allWpHomeService &&
              data.allWpHomeService.edges.map(
           
              
        
                prop => {
                  return (
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <ReactWOW animation='fadeInLeft'>
                            <div className="inner-box   animated">
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
								
								{(prop.node.HomeServices.icon != null ) ? (<img className="img-fluid lazyload" data-src={prop.node.HomeServices.icon.sourceUrl} />) : ('')}
								
                                    
                                </div>
                                <h3><Link to={"/services/"+prop.node.slug+"/"}>{prop.node.HomeServices.title}</Link></h3>
                                <div className="text">{prop.node.HomeServices.descprition}</div>
                            </div>
                            </ReactWOW>
                        </div>
                          )
                }
              )}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
     )
    }}
  />
)
export default HomeService