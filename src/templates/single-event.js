import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Randomevent from '../components/Event/Randomevent'
import Particles from "react-tsparticles";
import Helmet from 'react-helmet'

class SingleProject extends Component {
  render() {
    const event = this.props.data.allWpEvent
	
    return (
      <Layout>
			<Helmet>
				
			</Helmet>
			
		<section className="events-section-1  pt-0" >
       <div className="container">
           <div className="main-panel">
                <div className="row justify-content-center">
                   
                    <div className="col-xl-9 col-lg-10 bg-white">
                        <h1 className="section-heading ">
                            {event.edges[0].node.title}
                        </h1>
                         
                        <div className="event-detail-continer ">
                            <div className="event-image ">
								{(event.edges[0].node.events.image != null) ? ( <img src={event.edges[0].node.events.image.sourceUrl} className="img-fluid w-100" alt=""/>) : ('')}
                               
                            </div>
                            <div className="event-date-and-place">
                                <ul className="date-and-place justify-content-start">
                                    <li><i className="fa fa-calendar"></i> <span>Date : {event.edges[0].node.events.date} </span></li>
                                    <li><i className="fa fa fa-clock-o"></i> <span>Time : 9PM - 11PM</span></li>
                                    <li><i className="fa fa-map-marker"></i> <span>Location : Ahmedabad</span></li>
                                </ul>
                            </div>
                            <div className="event-content-block">
                                <p dangerouslySetInnerHTML={{ __html: event.edges[0].node.events.longDesc}} />
                              <h2 className="section-heading text-center d-block mt-4">Gallery </h2> 
                              
                             </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       </div>
    </section>
    <div className="container">
		<Lightbox images={event.edges[0].node.events.gallery} />
   
    </div>
	
	<Randomevent url={event.edges[0].node.slug} />	
		
		
		
		
			 
		</Layout>
    )
  }
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql`
  query($id: String!) {
    allWpEvent(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				slug
				events{
					date(formatString: "D MMMM,Y")
					image{
						sourceUrl
					}
					longDesc
					shortDesc
					 gallery {
					id
					sourceUrl
				  }
				}
				
				
		}}
    }
  }
`