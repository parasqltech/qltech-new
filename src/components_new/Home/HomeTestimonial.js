import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import quote from '../../img/quote.png';
import ReactModal from 'react-modal'
import ReactWOW from 'react-wow'
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows : false,
      slidesToShow: 1,
      slidesToScroll: 1
};

class HomeTestimonialData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: ""
      }
    }
    handleModalOpen = (img) => {
        this.setState({ isModalOpen: true,testimonial_img:img})
		
    }

    handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
    }

render() {
    //const posts = this.props.data.allMarkdownRemark.node
	 const Testimonials = this.props.data.allWpTestimonial;
    return(
        <>
      <section className="sec06 pt_20 pb_20" data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400">
      <div className="container">
        <div className="row pb_20">
        <div className="col-md-12">
          <div className="title_wrap_uh text-center">
            <h2 className="had_ti">What   <span>Clients Say</span> </h2>
          </div>
        </div>
      </div>

      <Slider {...settings} className="testiomonial-slider" >
                {Testimonials && Testimonials && Testimonials.edges.map(
       
                  
                      
                  
                      prop => {
                      return ( 
                          
                      <div className="test_on">
        <div className="large-12 columns slider_gtf">
        <div className="owl-theme" id="testi2">
          <div className="item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="out_g">
                    <div className="tf_k">
                       {(prop.node.testimonial.image != null) ? (<img data-src={prop.node.testimonial.image.sourceUrl} className="img-fluid lazyload" alt=""/>) : ('')}
                         
                    </div>
                    <div className="our_trs" onClick={() => this.handleModalOpen(prop.node.testimonial.video)}>
                      <span data-video-id="" className="video-area-popup">
                                <i className="fa fa-play"></i></span>

                    </div>
                  </div>
              </div>
              <div className="col-md-6">
                <div className="cont_client_say">
                  <h4>{prop.node.testimonial.name}</h4>
                  <span>{prop.node.testimonial.desgination}</span>
                  <p className="sa_j">{(prop.node.testimonial.descprition.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" onClick={() => this.handleModalOpen(prop.node.testimonial.image.sourceUrl,prop.node.testimonial.name,prop.node.testimonial.desgination,prop.node.testimonial.descprition)}>Read More</a></span>):(''))}
                                              </p>                
                </div>
              </div>
            </div>
          </div>
            
         
          </div> 
      </div>
      </div>

                      
              
                      
                      
                        )
                      }
                  )}  
          </Slider>
 <ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={this.state.testimonial_img} allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
     
        
      </div>
    </section>
    
        </>
        
)
	
  }
}

const HomeTestimonial = () => (
  <StaticQuery
    query={graphql`
      query {
            allWpTestimonial {
                edges {
                  node {
                    id
                    testimonial {
                      desgination
                      descprition
                      name
                      video
                      image{
						  sourceUrl
					  } 
                    }
                  }
                }
              }
            
        }
    `}
    render={(data) => <HomeTestimonialData data={data} />}
  
	/>
)

export default HomeTestimonial
