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

class WorkDefineUsData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: "",
        testimonial_name: "",
        testimonial_designation: "",
        testimonial_text: "",
      }
    }
    handleModalOpen = (img,name,des,desc) => {
        this.setState({ isModalOpen: true,testimonial_img:img,testimonial_name:name,testimonial_designation:des,testimonial_text:desc })
        
    }

    handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
    }

render() {
    //const posts = this.props.data.allMarkdownRemark.node
     const Testimonials = this.props.data.allWpOurworkdefine;
     console.log('Testimonials',Testimonials);
    return(
        <>
     <section class="sec02 pt_20 pb_20 "  data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400">
    <div class="container">
      <div class="row  pb">
        <div class="col-md-12">
          <div class="title_wrap_uh text-center">
            <h2 class="had_ti">Our Work is What <span>Defines Us</span> </h2>
          </div>
        </div>
      </div>
      <Slider {...settings} className="testiomonial-slider" >
                {Testimonials && Testimonials && Testimonials.edges.map(
       
                  
                      
                  
                      prop => {
                      return (
        <div class="our_slider_g">
          <div class="large-12 columns slider_gtf">
                  <div class="owl-theme" id="testi0">
                    <div class="item">
                        <div class="row align-items-center">
                         
        
        <div class="col-md-6">
          <div class="our_defeni">
            {(prop.node.ourWorkDefinesData.sliderImage != null) ? (<img data-src={prop.node.ourWorkDefinesData.sliderImage.sourceUrl} className="img-fluid lazyload" alt=""/>) : ('')}
                       
          </div>
        </div>
        <div class="col-md-6">
          <div class="our_content_slide">
            <p class="mb_10">{(prop.node.ourWorkDefinesData.description).substring(0, 400)}</p>
            <div class="list_uk pt_20 pb_20">
              <ul>
                <li>
                  <div class="let_se">
                    <div class="let_data">{prop.node.ourWorkDefinesData.totalView}</div>
                    <div class="ret_data">Customer <br/> base</div>
                  </div>
                </li>
                <li>
                  <div class="let_se">
                    <div class="let_data">{prop.node.ourWorkDefinesData.percentage} </div>
                    <div class="ret_data">Retention </div>
                  </div>
                </li>
                <li>
                  <div class="let_se">
                    <div class="let_data">{prop.node.ourWorkDefinesData.percentageSecond}</div>
                    <div class="ret_data">Increase in<br/>business</div>
                  </div>
                </li>
                <div class="clr"></div>
              </ul>
            </div>
            <div class="btn_form ">
            <Link to={prop.node.ourWorkDefinesData.postUrl}>How we archived?</Link>
              </div>
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
    </div>
    </section>
        </>
        
)
    
  }
}

const WorkDefineUs = () => (
  <StaticQuery
    query={graphql`
      query {
            allWpOurworkdefine {
                edges {
                  node {
                    id
                    ourWorkDefinesData {
                      description
                      fieldGroupName
                      percentage
                      percentageSecond
                      postUrl
                      totalView
                      sliderImage{
                          sourceUrl
                      } 
                    }
                  }
                }
              }
            
        }
    `}
    render={(data) => <WorkDefineUsData data={data} />}
  
    />
)

export default WorkDefineUs
