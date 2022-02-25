import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactWorksheet from '../components/Contact/ContactWorksheet'

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


class Singleworksheet extends Component {
  render() {
    const blog = this.props.data.allWpWorksheet
	
   
   
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
                            <h1 className="section-heading mb-2" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} ></h1>
                           
                            <div className="event-image">
                              {(blog.edges[0].node.BlogExtra.featureImage != null) ? (<img src={blog.edges[0].node.BlogExtra.featureImage.sourceUrl} className="img-fluid" alt=""/>) : ("") }
						      
                            </div>
                            
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        
                        
                        </div>
						<div className="col-md-4">
							<div className="sidebar bg-light">
                            <div className="sidebar-widget guideform">
                                <p className="section-heading-2 text-center">Download now</p>
                                 
								 <ContactWorksheet url={"worksheet/"+blog.edges[0].node.slug} />
								 
								 
                            </div>
                           
                        </div>
                        </div>
                   
                    
                </div>
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

Singleworksheet.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleworksheet

export const pageQuery = graphql`
  query($id: String!) {
    allWpWorksheet(filter: {id: { eq: $id }}) {
		edges {
			node {
				id
				title
				content
				databaseId
				slug
				GuideWorksheetextrasection {
          
          sectionDesc
          sectionTitle
        }
		BlogExtra {
          
          postedBy
          featureImage {
            sourceUrl
          }
        }
				
				
			}
		}
    }
	
	
  }
  
`