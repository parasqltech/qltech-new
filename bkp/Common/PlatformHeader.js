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
			  <ul className="dropdown-menu-ul-list">
                                     
				{data &&
				data.allWpPlatform &&
				data.allWpPlatform.edges &&
				data.allWpPlatform.edges.map(
                prop => {
					return (
					<li>
                                           <Link to={"/platforms/"+prop.node.slug+"/"} className="dropdown-item mt-1">
                                               <span className="dropdown-menu-li-list"  dangerouslySetInnerHTML={{ __html: prop.node.title}}></span>
                                           </Link>
                                       </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default PlatformHeader
