import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const ServiceHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWpHomeService{
    edges{
      node{
        title
		slug
        HomeServices{
          title
          descprition
        }
      }
    }
  }
		}
    `}
    render={data => (
			 <>
                                     
				{data &&
				data.allWpHomeService &&
				data.allWpHomeService.edges &&
				data.allWpHomeService.edges.map(
                (prop,i) => {
					return (
            <Link to={"/services/"+prop.node.slug+"/"} className="dropdown-item">
            <h4 className="title">{prop.node.HomeServices.title}</h4>
            <ul>
					<li key={i}>
                                           
                                               <p className="our_hed_v">{prop.node.HomeServices.descprition}</p>
                                           
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

export default ServiceHeader
