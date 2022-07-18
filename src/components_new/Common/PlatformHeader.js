import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const PlatformHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWpPlatform {
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
				data.allWpPlatform &&
				data.allWpPlatform.edges &&
				data.allWpPlatform.edges.map(
                prop => {
					return (
                              
          
					<li>
                                           <Link to={"/platforms/"+prop.node.slug+"/"}  dangerouslySetInnerHTML={{ __html: prop.node.title}}></Link>
                                         
                                       </li>
                                      
                                      
					)
                }
                )}
									 
                                   </ul>    
                                   </>
    )}
	/>
)

export default PlatformHeader
