import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleArticle = () => (
  <StaticQuery
    query={graphql`
		query {
			 allWpPost(filter: {BlogFeatured: {isFeatured: {eq: "1:Featured"}}}, limit: 1, sort: {fields: databaseId, order: DESC}) {
				edges {
				  node {
					id
					title
					slug
					date(formatString: "D MMMM,Y")
					content
					knowledgeHub{
					img {
						id
						sourceUrl
					  }	
					}
					categories{
						nodes {
					  id
					  name
					  slug
					}
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="col-md-12 thumbnial thumbnial1" >
				{data &&
				data.allWpPost &&
				data.allWpPost.edges &&
				data.allWpPost.edges.map(
                prop => {
					return (
								<div>
                                 <div className="">
                                     <div className="img-thumbnial">
                                        
										{(prop.node.knowledgeHub.img != null) ? (<img src={prop.node.knowledgeHub.img.sourceUrl} className="img-fluid w-100"
                                                alt=""/>) : ('')}
										
                                     </div>
                                </div>
                                <div className="thumbnial-content top">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title}}  className="thumbnial-title"/>
                                    <div className="thumbnial-details" dangerouslySetInnerHTML={{ __html: (prop.node.content).replace( /(<([^>]+)>)/ig, '').substring(0, 250)+"..."  }} />
										
                                    <Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
                                </div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleArticle
