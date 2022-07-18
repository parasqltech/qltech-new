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
            <div className="con_hed_m"> 
            <Link to={"/industries/"+prop.node.slug+"/"} className="pd_15">
            <div className="list_newsubmenu">
            <ul>
					<li>
                                           
                                               <h4 className="dropdown-menu-li-list" dangerouslySetInnerHTML={{ __html: prop.node.title}}></h4>
                                           
                                       </li>
                                       </ul>
                                       </div>
                                       </Link>
                                       </div>
					)
                }
                )}
									 
                                      
                                   </>
    )}
	/>
)

export default IndustriesHeader
