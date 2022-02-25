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
import Moment from 'react-moment';
import 'moment-timezone';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
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


class Singleblog extends Component {
  render() {
    const blog = this.props.data.allWpPost
	
	const id = this.props.data.allWpPost.edges[0].node.databaseId
	const title = this.props.data.allWpPost.edges[0].node.title
	let disqusConfig = {
    url: "",
    identifier: id,
    title: title,
  }
   
   
    return (
      <Layout>
		<Helmet>
		
		</Helmet>
			
				<section className="events-section-1 article-section-1 blog-section pt-0">
       <div className="container bg-white">
           <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="event-detail-continer ">
                            <h1 className="section-heading mb-2" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} ></h1>
                           
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        <div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].previous != null) ? (<Link to={"/hub"+blog.edges[0].previous.categories.nodes[0].slug+"/"+blog.edges[0].previous.slug+"/"} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].next != null) ? (<Link to={"/hub"+blog.edges[0].next.categories.nodes[0].slug+"/"+blog.edges[0].next.slug+"/"} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].next.title}</span>
                            </Link>) : ('')}
							
                        </div>
                        <div className="author-details-block border-bottom  pb-4 mb-4">
							<div className="author-image blog-author-image">
							
							{(blog.edges[0].node.author.node.avatar.url != '') ? (<img src={blog.edges[0].node.author.node.avatar.url} className="img-fluid"/>) : ('')}
							
							
									
							</div>
							<div className="author-info blog-author-info">
									<span className="sub-heading ">Written By</span>
									<h4 className="section-heading-3 mb-2 mt-0">{blog.edges[0].node.author.node.name}</h4>
									<p className="mb-0">{blog.edges[0].node.author.node.description}</p>
							</div>
						</div>
                        </div>
                   
                    
                </div>
            </div>
       </div>
	
	   
	   <div className="container bg-white">
      <Disqus config={disqusConfig} />
	  </div>
    </section>
		
      
		</Layout>
    )
  }
}

Singleblog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleblog

export const pageQuery = graphql`
  query($id: String!) {
    allWpPost(filter: {id: { eq: $id }}) {
		edges {
			next {
				slug
				title
				categories {
					 nodes {
				  slug
				}
				}
			}	
			previous {
				slug
				title
				categories {
					nodes {
				  slug
				}
				}
			}
			node {
				id
				title
				content
				databaseId
				slug
				BlogExtra  {
				  featureImage{
					  sourceUrl
				  }
				}
				author { 
				node {				
				  name
				  description
				  avatar {
					url
				  }
				}
				}
				
			}
		}
    }
	
	
  }
  
`