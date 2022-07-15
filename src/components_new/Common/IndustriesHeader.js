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
                                     
				{data &&
				data.allWpIndustries &&
				data.allWpIndustries.edges &&
				data.allWpIndustries.edges.map(
                prop => {
					return (
            <Link to={"/industries/"+prop.node.slug+"/"} className="dropdown-item mt-1">
            <ul className="dropdown-menu-ul-list">
					<li>
                                           
                                               <h4 className="dropdown-menu-li-list" dangerouslySetInnerHTML={{ __html: prop.node.title}}></h4>
                                           
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

export default IndustriesHeader
