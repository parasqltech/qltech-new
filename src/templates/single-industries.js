import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactIndustries from '../components/Contact/ContactIndustries'

import Helmet from 'react-helmet'
import quote from  "../img/quote.png"
import ReactModal from 'react-modal'

class Singleindustries extends Component {
	
	constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: "",
        testimonial_name: "",
        testimonial_designation: "",
        testimonial_text: "",
        show: "d-block",
      }
    }
	 handleModalOpen = (img,name,des,desc) => {
        this.setState({ isModalOpen: true,testimonial_img:img,testimonial_name:name,testimonial_designation:des,testimonial_text:desc })
		
    }

    handleModalClose = event => {
		this.setState({ isModalOpen: false })
    }
  render() {
    const industries = this.props.data.allWpIndustries
    const works = this.props.data.allWpWork
	
    return (
      <Layout>
			<Helmet>
			
			</Helmet>
			
		
			
			<section className="events-section-1 article-section-1 blog-section pt-0">
				<div className="container bg-white">
					<div className="main-panel">
						<div className="row justify-content-center">
							<div className="col-xl-9 col-lg-10">
								<div className="event-content-block">
								<h1 class="section-heading mb-2" dangerouslySetInnerHTML={{ __html: industries.edges[0].node.title}}/>
									
								<div dangerouslySetInnerHTML={{ __html: industries.edges[0].node.content }}>

								</div>
								
								</div>
									
							</div>
						</div>
					</div>
				</div>
			</section>
			{(industries.edges[0].node.Servicestestimonial.image != null) ? (<section className="home-testimonial-section">
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
                                <img src={(industries.edges[0].node.Servicestestimonial.image != null) ? industries.edges[0].node.Servicestestimonial.image.sourceUrl : ''} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                               
								
								<span>{(industries.edges[0].node.Servicestestimonial.testimonial).substring(0, 400)}</span>
                                              {(industries.edges[0].node.Servicestestimonial.testimonial.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" onClick={() => this.handleModalOpen(industries.edges[0].node.Servicestestimonial.image.sourceUrl,industries.edges[0].node.Servicestestimonial.clientName,industries.edges[0].node.Servicestestimonial.designationcompany,industries.edges[0].node.Servicestestimonial.testimonial)}>Read More</a></span>):(''))}
								
								
                                <div className="author-info">
                                    <h4 dangerouslySetInnerHTML={{ __html: industries.edges[0].node.Servicestestimonial.clientName}} ></h4>
                                    <p dangerouslySetInnerHTML={{ __html: industries.edges[0].node.Servicestestimonial.designationcompany}} ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>):('')}
	<section className="home-work-section home-work-section-details pt-4  ">
        
        <div className="container bg-white">
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Our Success</span> 
                        <h2 className="section-heading text-center wow fadeIn" >
                            See it in Action
                        </h2>
                    <div className=" pt-0">
                        <div className="home-portfolio-slider-1 wow  animated" >
                            <div className="row">
							{
							works &&
							works.edges.map(
							prop => {
								return (
                                <div className="col-md-4">
                                   <div className="work-thumbnial">
                                       <div className="work-thumbnail-image">
                                           <img src={prop.node.work.mainImage.sourceUrl} className="img-fluid" alt=""/>
                                       </div>
                                       <div className="work-thumbnail-details">
                                           <p className="work-title" dangerouslySetInnerHTML={{ __html: prop.node.work.title }}  ></p>
                                           <p className="label-text">{prop.node.work.shortDescprition}</p>
                                           <Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                       </div>
                                   </div>
                               </div>
							   )
							}
							)}
							   
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<section className="form-section mt-4 ">
            <div className="container  bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-10">
					<span className=" sub-heading d-block mb-2 text-center mb-2" >Contact Us</span>
                        <h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>

                    </div>
                </div>
                <div className="main-panel">    
					<ContactIndustries url={"industries/"+industries.edges[0].node.slug} />
					
                </div>
            </div>
    </section>
	<ReactModal  
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
            className="modal d-block fade testimonial-view show"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg " tabindex="-1" role="dialog">
          <div class="modal-content " >
              <button type="button" class="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
        
            <div class="modal-body p-4">
                <div class="row justify-content-center">
                    
                    <div class="col-xl-12">
                        <div class="author-content">
                            <div class="quote">
                                <img src={quote} class="img-fluid" alt=""/>
                            </div>
                            <p class="label-text testimonialDetail"></p>
                            <div class="author-info">
                                <div className="author-content">
                                         
                                          <p className="label-text">
                                              <span>{this.state.testimonial_text}</span>
                                          </p>
										  <div className="author-details-block">
											<div className="author-image text-center">
												<img src={this.state.testimonial_img} className="img-fluid d-inline" alt={this.state.testimonial_name} />
											</div>
											 <div className="author-info">

												
                                              <h4>{this.state.testimonial_name}</h4>
                                              <p>{this.state.testimonial_designation}</p>
                                          </div>
										  
										  </div>
                                         
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
       
          
      
      
        </ReactModal>
		</Layout>
    )
  }
}

Singleindustries.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleindustries

export const pageQuery = graphql`
  query($id: String!,$casestudy: [Int]) {
    allWpIndustries(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				content
				slug
				Servicestestimonial {
					clientName
					testimonial
					designationcompany
					image {
						sourceUrl
					}
				}
				
				
		}}
    }
	allWpWork(filter: {databaseId: {in: $casestudy}},sort: {fields: databaseId, order: ASC}) {
    edges {
      node {
				title
				slug
				work{
					title	
					shortDescprition
					mainImage {
                                sourceUrl
                                link
                              }
				}
				
		}
    }
  }
	
  }
`