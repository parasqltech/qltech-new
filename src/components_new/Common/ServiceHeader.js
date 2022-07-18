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
       <ul className="">
                                     
        {data &&
        data.allWpHomeService &&
        data.allWpHomeService.edges &&
        data.allWpHomeService.edges.map(
                (prop,i) => {
          return (
          <li key={i} className="">
                                           <Link to={"/services/"+prop.node.slug+"/"} className="dropdown-item">
                                               <span className="services-heading">{prop.node.HomeServices.title}</span>
                                               <span className="services-description">{prop.node.HomeServices.descprition}</span>
                                           </Link>
                                       </li>
          )
                }
                )}
                   
                                      
                                   </ul>
    )}
  />
)

export default ServiceHeader
