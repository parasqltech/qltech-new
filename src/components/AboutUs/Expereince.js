import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import AboutPopup from './AboutPopup';


const Expereince = () => (
  <StaticQuery
    query={graphql`
      query {
    allWpExperience {
                        edges {
                            node {
                                experience {
                                    tagline
                                    descprition
                                }
                            }
                        }
                    }
                    allWpPartner {
                        edges {
                          node {
                            id
                            partners {
                              icon {
                                sourceUrl
                              }
                            }
                          }
                        }
                    }
            
        }
    `}
    render={data => (
		<section className="about-us-section-2 mt-4 pt-4 ">
                <div className="container bg-white">
                    <div className="main-panel">
                  
                        <div className="row">
                            
                            <div className="col-lg-6">
                            {data &&
                            data.allWpExperience &&
                            data.allWpExperience.edges.map(
                        
                            
                        
                            prop => {
                            return (  
                                <> 
                                <h4 className="sub-heading">Our Partnerships</h4>
                                <h3 className="section-heading">{prop.node.experience.tagline}</h3>
                                <p className="label-text">{prop.node.experience.descprition}</p>
                                
								<AboutPopup />
                                  </>
                                        )
                                    }
                                )}  
                            </div>
                         
                            <div className="col-lg-6">
                                <div className="about-us-data-show xs-center section-padding">
                                        {data &&
                                    data.allWpPartner &&
                                    data.allWpPartner.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (  
                                        <> 
                                    <div className="about-us-data-show-single wow fadeInUp Tilt" >
                                       <div className="client-logo">
                                            <img src={prop.node.partners.icon.sourceUrl} className="img-fluid Tilt-inner" alt=""/>
                                        </div>
                                    </div>
                                    </>
                                        )
                                    }
                                )}  
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
            </section>
    )}
	/>
)

export default Expereince
