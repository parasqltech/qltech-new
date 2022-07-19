import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import ReactWOW from 'react-wow'
const OurServicess = () => (
  <StaticQuery
    query={graphql`
      query {
   allWpOurServicess(limit: 10) {
    edges {
      node {
        id
        ourServicessNewData {
          contentData
          title
          serviceImage {
            id
            sourceUrl
          }
        }
      }
    }
  }
      }
    `}
     render={data => {
      return (
        <>
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
              data.allWpOurServicess &&
              data.allWpOurServicess.edges.map(
           
              
        
                prop => {
                  return (
        <div class="col-md-6" data-aos="flip-left" >
          <div class="servi_gt">
            <div class="sev_img">
               {(prop.node.ourServicessNewData.serviceImage != null) ? (<img data-src={prop.node.ourServicessNewData.serviceImage.sourceUrl} className="img-fluid lazyload" alt=""/>) : ('')}
           
            </div>
            <div class="sev_cont">
              <h4>{(prop.node.ourServicessNewData.title != null)?(prop.node.ourServicessNewData.title): ('')}</h4>
                <p>{(prop.node.ourServicessNewData.contentData != null)?(prop.node.ourServicessNewData.contentData): ('')}</p>
            </div>
          </div>
        </div>
        )
                }
              )}
        
      </div>
    </div>
  </section>
    </>
     )
    }}
  />
)
export default OurServicess