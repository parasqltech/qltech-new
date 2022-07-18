import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import ReactWOW from 'react-wow'
const NeedUs = () => (
  <StaticQuery
    query={graphql`
      query {
   allWpYouNeedUs(limit: 5) {
    edges {
      node {
        id
        whyDoYouNeedUs {
          descripition
          fieldGroupName
          title
          url
          doImage {
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
        <div>
       <section class="sec03 pt_20 pb_20" data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400" >
      <div class="container">
        <div class="row  pb">
        <div class="col-md-12">
          <div class="title_wrap_uh text-center">
            <h2 class="had_ti">Why Do You  <span>Need Us?</span> </h2>
          </div>
        </div>
      </div>
      <div class="row  pb">
      {data &&
              data.allWpYouNeedUs &&
              data.allWpYouNeedUs.edges.map(
           
              
        
                prop => {
                  return (
        <div class="col-md-4" data-aos="flip-left" data-aos-duration="1200" ata-aos-offset="400" >
          <div class="need_wrap">
            <div class="img_s">
          {(prop.node.whyDoYouNeedUs.doImage != null) ? (<img data-src={prop.node.whyDoYouNeedUs.doImage.sourceUrl} className="img-fluid lazyload" alt=""/>) : ('')}
              

            </div>
            <h4>{prop.node.whyDoYouNeedUs.title}</h4>
            <p>{prop.node.whyDoYouNeedUs.title}</p>
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
export default NeedUs