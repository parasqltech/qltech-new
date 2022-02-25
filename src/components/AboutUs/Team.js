import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpTeam(sort: {fields: databaseId, order: ASC}) {
                        edges {
                        node {
                            id
                            team {
                            title
                            desgination
                            image {
                                sourceUrl
                            }
                            }
                        }
                    }
                }
            
        }
    `}
    render={data => (
		<section className="about-us-section-4 bg-white">
                        <div className="container">
                            <div className="main-panel">
                                <span className="section-subheading-heading">Our Team</span>
                                <h2 className="section-heading text-center">
                                    People that make it happen
                                </h2>
                               
                                       
                                            <ul className="team-list">
                                                {data &&
                                                    data.allWpTeam &&
                                                    data.allWpTeam.edges.map(
                                                
                                                    
                                                
                                                    prop => {
                                                    return (   
                                                    <li className="team-person">
                                                        <p className="team-member-name">
                                                        {prop.node.team.title}
                                                        </p>
                                                        <img src={prop.node.team.image.sourceUrl} className="img-fluid"/>
                                                        <p className="team-member-position">
                                                            {prop.node.team.desgination}
                                                        </p>
                                                    </li>
                                                      )
                                                    }
                                                )}  
                                            </ul>
                                          
                          
                          
                          </div>
                        </div>
                </section>
    )}
	/>
)

export default Team
