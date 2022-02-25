import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const ProcessHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWpProcess{
		edges {
		  node {
			title
			slug
			process {
			  mainTitle
			  shortDesc
			}
		  }
		}
	  }
		}
    `}
    render={data => (
			 <ul className="">
                                     
				{data &&
				data.allWpProcess &&
				data.allWpProcess.edges &&
				data.allWpProcess.edges.map(
                prop => {
					return (
					<li className="">
                                            <Link to={"/process/"+prop.node.slug+"/"} className="dropdown-item">
                                                <span className="services-subheading" dangerouslySetInnerHTML={{
              __html: prop.node.process.mainTitle
            }} />
                                                <span className="services-heading" dangerouslySetInnerHTML={{
              __html: prop.node.title
            }} />
                                                <span className="services-description" dangerouslySetInnerHTML={{
              __html: prop.node.process.shortDesc
            }} />
                                            </Link>
                                        </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default ProcessHeader
