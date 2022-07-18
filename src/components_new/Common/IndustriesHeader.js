import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const IndustriesHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
         allWpIndustries {
    edges {
      node {
        title
        slug
      }
    }
  }
		}
    `}
    render={data => (
			  <>
	   <ul>
                                     
				{data &&
				data.allWpIndustries &&
				data.allWpIndustries.edges &&
				data.allWpIndustries.edges.map(
                prop => {
					return (
             
            
          
					<li>
                                           
                                               <Link  to={"/industries/"+prop.node.slug+"/"}  dangerouslySetInnerHTML={{ __html: prop.node.title}}></Link>
                                           
                                       </li>
                                     
                                      
                                      
					)
                }
                )}
				 </ul>					 
                                      
                                   </>
    )}
	/>
)

export default IndustriesHeader
