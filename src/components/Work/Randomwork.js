import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';
import ReactWOW from 'react-wow'
class Randomwork extends React.Component{
	
	constructor(props) {
		super(props);
		
	}
	
	
	
  render (){
    return(
      <>
      <StaticQuery
    query={graphql`
      query {
        allWpWork(limit: 4, sort: {fields: databaseId, order: DESC}) {
		edges {
			node {
				title
				slug
				work{
					shortDescprition
					mainImage {
                                sourceUrl
                                
                              }
				}
				
		}}
    }
      }
    `}
    render={data => (
       <section className="home-work-section home-work-section-details pt-4  ">
        
        <div className="container bg-white"  >
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Our Work</span> 
                        <ReactWOW   animation='fadeIn'>
						<h2 className="section-heading text-center" >
                            Customer Stories
                        </h2>
                        </ReactWOW>
                    <div className=" pt-0">
                         <ReactWOW   animation='animated'>
						<div className="home-portfolio-slider-1" >
                            <div className="row">
							{data &&
							data.allWpWork &&
							data.allWpWork.edges.map(
							(prop,i) => {
								return (
								
								<>
								{(prop.node.slug == this.props.url) ? ('') : (
								<>
								{(i > 2) ? ('') : (<div className="col-md-4">
                                   <div className="work-thumbnial">
                                       <div className="work-thumbnail-image">
									   {(prop.node.work.mainImage != null) ? (<img src={prop.node.work.mainImage.sourceUrl} className="img-fluid" alt=""/>) : ('')}
										   
                                       </div>
                                       <div className="work-thumbnail-details">
                                           <p className="work-title" dangerouslySetInnerHTML={{ __html: prop.node.title }}  ></p>
                                           <p className="label-text">{prop.node.work.shortDescprition}</p>
                                           <Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                       </div>
                                   </div>
                               </div>)}
								</>
								)}
								</>
								
								
                               
							   )
							}
							)}
							   
                            </div>
                            
                            
                        </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )}
  />
    </>
    )
  }
}

export default Randomwork