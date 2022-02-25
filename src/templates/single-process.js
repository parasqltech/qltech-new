import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from 'react-helmet'
import ContactProcess from '../components/Contact/ContactProcess'

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


class Singleprocess extends Component {
  render() {
    const service = this.props.data.allWordpressWpProcess
   
	
    return (
      <Layout>
	  <Helmet>
			
			</Helmet>
			
				<section className="breadcumbs-and-title-section">
					 
					<div className="container text-center">
						<span className="section-subheading-heading">Process</span>
						
						<h1 className="section-heading" dangerouslySetInnerHTML={{ __html: service.edges[0].node.title}} >
						
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Process</li>
						</ul>
					</div>
			</section>
			<section className="home-services-section service-section-1 ">
        
        <div className="container bg-white">
            <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
						<div className="blank-section">
						<div  dangerouslySetInnerHTML={{ __html: service.edges[0].node.content}}  ></div>
                    
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
						<span className=" sub-heading d-block mb-2 text-center mb-2">Contact Us</span>
                        <h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>

                    </div>
                </div>
                <div className="main-panel">
                  <ContactProcess url={"process/"+service.edges[0].node.slug} />
                </div>
            </div>
    </section>
	
		</Layout>
    )
  }
}

Singleprocess.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleprocess

export const pageQuery = graphql`
  query($id: String!) {
    allWpProcess(filter: {id: { eq: $id }}) {
		edges {
      node {
        id
        title
        content
		slug
		
      }
    }
    }
	
	
  }
  
`