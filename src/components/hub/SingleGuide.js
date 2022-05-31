import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleGuide = () => (
  <StaticQuery
    query={graphql`
		query {
			allWpGuide(limit: 2) {
				edges {
				  node {
					id
					title
					slug
					content
					 BlogExtra {
					  featureImage{
						  sourceUrl
					  }
					  
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="row" >
				{data &&
				data.allWpGuide &&
				data.allWpGuide.edges &&
				data.allWpGuide.edges.map(
                prop => {
					return (
								<div className="col-md-6 thumbnial" >
                                 
                                     <div className="img-thumbnial">
                                        
										{(prop.node.BlogExtra.featureImage != null) ? (<img src={prop.node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100"/>) : ('')}
                                     </div>
                                
                                <div className="thumbnial-content">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title.replace( /(<([^>]+)>)/ig, '') }}  className="thumbnial-title"/>
                                    <p className="thumbnial-details" dangerouslySetInnerHTML={{ __html: (prop.node.content).substring(0, 250)+"..."}} />
                                    <Link to={"/guide/"+prop.node.slug+"/"} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
                                </div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleGuide
