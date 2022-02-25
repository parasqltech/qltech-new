import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactGuide from '../components/Contact/ContactGuide'

import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Helmet from 'react-helmet'
const settings = {
      dots: false,
	  prevArrow: false,
	  nextArrow: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
      
    };


class Singleguide extends Component {
  render() {
    const blog = this.props.data.allWpGuide
	
   
   
    return (
      <Layout>
		<Helmet>
			
			</Helmet>
			
				<section className="events-section-1 article-section-1 blog-section pt-0">
       <div className="container bg-white">
           <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="event-detail-continer ">
                            <h1 className="section-heading mb-2"dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} ></h1>
                           
                            <div className="event-image">
                              {(blog.edges[0].node.BlogExtra.featureImage != null) ? ( <img src={blog.edges[0].node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100" alt=""/>) : ('')}
                            </div>
                           
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        
                        
                        </div>
                   <div className="col-md-4">
							<div className="sidebar bg-light">
                            <div className="sidebar-widget guideform">
                                <p className="section-heading-2 text-center">Download now</p>
                                 
								 <ContactGuide url={"guide/"+blog.edges[0].node.slug} />
								 
								 
								 
								 
                            </div>
                           
                        </div>
                        </div>
                    
                </div>
            </div>
       </div>
	   
    </section>
		<section className="what-you-get ">
        <div className="container bg-white">
             <h2 className="section-heading text-center mb-1">{blog.edges[0].node.GuideWorksheetextra.guideOfferTitle}</h2>
            <p className="sub-heading text-center pb-4" >{blog.edges[0].node.GuideWorksheetextra.guideOfferSubtitle}</p>
            <div className="row">
                {
				blog.edges[0].node.whatThisGuideHasToOfffer &&
				blog.edges[0].node.whatThisGuideHasToOfffer.map(
                propd => {
					return (
						<Tilt options={{ max : 10,scale:1 }} className="Tilt col-lg-4 col-md-6 customer-benifil">
						<div className="thumbnial text-center Tilt-inner"  data-wow-delay="0.4s" >
							<div className="thumbnial-icon">
								{(propd.offerIcon != null ) ? (<img src={propd.offerIcon.sourceUrl} className="img-fluid" alt=""/>) : ("") }
							</div>
							<h4 className="section-heading-2"> {propd.offerTitle}</h4>
							<p className="label-text">{propd.offerDesc} </p>
						</div>
					</Tilt>
					)
                }
                )}
				
				
				
                
            </div> 
            
            
            
        </div>  
    </section>	
     <section className="guide-last-section">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-xl-5 col-md-6  col-sm-7">
                    <h2 className="section-heading mb-1"> {blog.edges[0].node.GuideWorksheetextrasection.sectionTitle}</h2>
                   
                    <p className="label-text">
                            {blog.edges[0].node.GuideWorksheetextrasection.sectionDesc}
                    </p>
                    <a href="javascript:;" className="btn btn-default btn-dnwld float-right"> SEND ME MY PDF!</a>
                </div>
            </div>
        </div>
    </section> 
      
		</Layout>
    )
  }
}

Singleguide.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleguide

export const pageQuery = graphql`
  query($id: String!) {
    allWpGuide(filter: {id: { eq: $id }}) {
		edges {
			node {
				id
				title
				content
				databaseId
				slug
				BlogExtra {
          
          postedBy
          featureImage {
            sourceUrl
          }
        }
		GuideWorksheetextra {
          fieldGroupName
          guideOfferSubtitle
          guideOfferTitle
          whatThisGuideHasToOfffer {
            fieldGroupName
            offerDesc
            offerTitle
            offerIcon {
              sourceUrl
            }
          }
        }
		 GuideWorksheetextrasection {
          fieldGroupName
          sectionDesc
          sectionTitle
        }
				
				
			}
		}
    }
	
	
  }
  
`