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
       <section class="sec04 pt_20 pb_20" data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400" >
        <div class="container">
            <div class="row  pb">
                <div class="col-md-12">
                    <div class="title_wrap_uh text-center">
                        <h2 class="had_ti">Our  <span>Service</span> </h2>
                    </div>
                </div>
            </div>
            <div class="row  pb">
            
                    {data &&
              data.allWpHomeService &&
              data.allWpHomeService.edges.map(
           
              
        
                prop => {
                  return (
                  <div class="col-md-6" data-aos="flip-left" >
                    <div class="servi_gt">
                        <div class="sev_img">
                            {(prop.node.HomeServices.icon != null ) ? (<img className="img-fluid lazyload" data-src={prop.node.HomeServices.icon.sourceUrl} />) : ('')}
                        </div>
                        <div class="sev_cont">
                            <h4><Link to={"/services/"+prop.node.slug+"/"}>{prop.node.HomeServices.title}</Link></h4>
                            <p>{prop.node.HomeServices.descprition}</p>
                        </div>
                    </div>
                    </div>
                    )
                }
              )}
                
                
            </div>
        </div>
    </section>
    </div>
     )
    }}
  />
)
export default HomeService