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
				{data &&
				data.allWpPlatform &&
				data.allWpPlatform.edges &&
				data.allWpPlatform.edges.map(
                prop => {
					return (
            <Link to={"/platforms/"+prop.node.slug+"/"} className="dropdown-item mt-1">
                                               
          <ul className="dropdown-menu-ul-list">  
					<li>
                                           <h4 className="dropdown-menu-li-list"  dangerouslySetInnerHTML={{ __html: prop.node.title}}></h4>
                                         
                                       </li>
                                       </ul>
                                         </Link>
					)
                }
                )}
									 
                                      
                                   </>
    )}
	/>
)

export default PlatformHeader
