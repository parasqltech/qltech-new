import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactWork from '../components/Contact/ContactWork'

import Helmet from 'react-helmet'
import quote from  "../img/quote.png"
import Randomwork from '../components/Work/Randomwork'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
      dots: false,
      arrows : false,
      infinite: false,
      speed: 500,
	  autoplay: true,
	  autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
	    mobileFirst: true,
      responsive: [
        {
        breakpoint: 767,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 400,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2
        }
    },
    {
        breakpoint:320,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
    }
    ]
    };


class SingleWork extends Component {
  render() {
    const work = this.props.data.allWpWork;
	
	var cls ="col-lg-12";
	if(work.edges[0].node.Gallery.gallery != null){
		const work_details = work.edges[0].node.Gallery.gallery.length;
		if(work_details <= 2){
			cls ="col-lg-6";
		}
		else if(work_details <= 3){
			cls ="col-lg-4";
		}
		else if(work_details <= 4){
			cls ="col-lg-3";
		}
		else{
			cls ="col-lg-2";
		}
	}
	
	
	
	
	
	
    return (
      <Layout>
	  <Helmet>
			
			</Helmet>
			
		<section className="work-details-section-1  blank-section">
        <div className="main-panel">
            <div className="container bg-white">
                <h1 className="section-heading text-left mb-1">
                    {work.edges[0].node.WorkpageDetails.titleMain}
                </h1>
                <p className="sub-heading">{work.edges[0].node.WorkpageDetails.subTitle}</p>

                
               
                
                <div className="main-panel">
                    <div className="row justify-content-between ">
                        <div className="col-xl-8 col-lg-8">
                            
							{(work.edges[0].node.CustomImage.customImage != null) ? (<img data-src={work.edges[0].node.CustomImage.customImage.sourceUrl} className="img-fluid lazyload mb-4"/>) : ('') }
							
							
                            <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.content }}  ></div>
							
							{(work.edges[0].node.WorkpageDetails.youtubeVideoUrl != null) ? (<div className="embed-responsive embed-responsive-16by9 text-center">
							<iframe className="embed-responsive-item " width="560" height="315" src={work.edges[0].node.WorkpageDetails.youtubeVideoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>) : ('')}
							
							
							
							
							
							
							{(work.edges[0].node.WorkpageDetails.problemStatement != null) ? (<><h2 className="section-heading-2 mb-2 mt-4">Challenge</h2><div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.WorkpageDetails.problemStatement }} ></div></>) : ('')}
							
							
							{(work.edges[0].node.WorkpageDetails.theQlApproachToTheBusiness != null) ? ( <><div className="text-center">
                                <span className="custom-break-line">
                                    <span className="custom-break-line-one"></span>
                                    <span  className="custom-break-line-two"></span>
                                </span>
                            </div>
                            <h2 className="section-heading-2 mb-2">Strategy</h2>
                            <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.WorkpageDetails.theQlApproachToTheBusiness }} ></div></>) : ('')}
                            
                            {(work.edges[0].node.WorkpageDetails.howTheClientsBusinessTransformed != null) ? (<><div className="text-center">
                                    <span className="custom-break-line">
                                       <span className="custom-break-line-one"></span>
                                       <span  className="custom-break-line-two"></span>
                                   </span>
                               </div>
                            <h2 className="section-heading-2 mb-2"> Transformation</h2>
                            <div className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.WorkpageDetails.howTheClientsBusinessTransformed }} ></div></> ) : ("")}
                           
                               {(work.edges[0].node.Gallery.gallery != null) ? (<div className=""><div {...settings} className="trusted-by-slider row" >
							{
								work.edges[0].node.Gallery.gallery.map(
								prop => {
									return (
										<div className={cls+" p-2"}>
										<img src={prop.sourceUrl} className="img-fluid" alt="" />
										</div>
										)
									}
								)}
						</div></div>) : ('')}
                        </div>
                        
						
                        <div className="col-xl-3 col-lg-4">
                            <h5 className="section-heading-3">About</h5>
                            <p className="label-text" dangerouslySetInnerHTML={{ __html: work.edges[0].node.WorkpageDetails.aboutCompany }} ></p>
                            <p className="label-text mb-0"><b>Industry: </b> {work.edges[0].node.WorkpageDetails.companyName}</p>
                            <p className="label-text mb-0"><b>Platforms: </b> {work.edges[0].node.WorkpageDetails.companySize}</p>
                            <p className="label-text mb-4"><b>Services: </b> {work.edges[0].node.WorkpageDetails.location}</p>
                           
                            
                            <div className="form-section postion-sticky">
                                
								
								
								
                                        <div className="bg-light p-3">
                                            <h2 className="section-heading-3 text-center "> Contact Us</h2>
                                           <ContactWork url={"work/"+work.edges[0].node.slug}/>
                                        </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </section>
	
	{(work.edges[0].node.Worktestimonial.clientName != null) ? (<section className="home-testimonial-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <span className="section-subheading-heading">Testimonial</span> 
                    <h2 className="section-heading text-center wow fadeIn">
                        Our customers loves us
                    </h2>
                </div>
            </div>
        </div>
        <div className="testiomonial-slider ">
            <div className="customer-testimonial-block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                            <div className="author-image">
                                
									{(work.edges[0].node.Worktestimonial.clientPic != null) ? (<img src={work.edges[0].node.Worktestimonial.clientPic.sourceUrl} className="img-fluid" alt=""/>) : ('')}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                                <p className="label-text">{work.edges[0].node.Worktestimonial.clientTestimonial}</p>
                                <div className="author-info">
                                    <h4>{work.edges[0].node.Worktestimonial.clientName}</h4>
                                    <p>{work.edges[0].node.Worktestimonial.clientDesignation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>) : ("")}
	

	<Randomwork url={work.edges[0].node.slug} />	
		
		
			 
		</Layout>
    )
  }
}

SingleWork.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleWork

export const pageQuery = graphql`
  query($id: String!) {
    allWpWork(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				content
				slug
				CustomImage {
					customImage {
						sourceUrl
					}
				}
				work {
					fieldGroupName
					longDescprition
					shortDescprition
					title
				}
				Gallery {
					gallery {
						sourceUrl
					}
				}
				Worktestimonial {
					clientDesignation
					clientTestimonial
					clientName
					clientPic {
						sourceUrl
					}
				}
				WorkpageDetails {
					aboutCompany
					companyName
					companySize
					howTheClientsBusinessTransformed
					location
					problemStatement
					revenue1
					revenue2
					revenue3
					revenueText1
					revenueText2
					revenueText3
					subTitle
					theQlApproachToTheBusiness
					titleMain
					youtubeVideoUrl
				}
			}	
		}
    }
  }
`