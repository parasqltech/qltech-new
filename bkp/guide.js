import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

import event_thumb from '../img/events/event-thumbnial.jpg';
import Helmet from 'react-helmet'
import Main from '../components/Guide/Main';
const guide = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpGuide{
				edges {
				  node {
					id
					title
					slug
					content
					acf {
            feature_image{
						  source_url
					  }
					  posted_by
					}
					date(formatString: "D MMMM,Y")
				  }
				}
			}
			allWordpressCategory(filter: {wordpress_parent: {eq: 25}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			}
      }
    `}
    render={data => (
		<Layout>
			<Helmet>
				<title>Guide | Handy Resources Guides - QL Tech</title>
				<meta name="title" content="Guide | Handy Resources Guides - QL Tech"></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						<span className="section-subheading-heading">Guides</span>
						<h1 className="section-heading">
						Handy Resources
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Guides</li>
						</ul>
					</div>
			</section>
			<section className="guide-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Featured</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <Main />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				 <div className="container bg-white">
                <div className="row justify-content-center">
                        <div className="col-md-11 ">
                     <div className="row  justify-content-center">
                        <div className="col-lg-12 col-md-12">
                        <div className="row">
						              {data &&
				data.allWordpressWpGuide &&
				data.allWordpressWpGuide.edges &&
				data.allWordpressWpGuide.edges.map(
                prop => {
					return (
						
						<div className="col-md-6 col-sm-6 wow fadeInLeft">
                            <div className="grid">
                                <div className=" guide-thumbnial">
                                    <div className="guide-image" style={{"background-image":"url("+  prop.node.acf.feature_image.source_url +")"}}>
								
                                    </div>
                                   
                                    <Link to={"/guide/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title+' <i class="fa fa-long-arrow-right ml-1"></i>'}} className="guide-text">
									 
                                    </Link>
                                </div>
                            </div>
                        </div>
						
						)
                }
                )}	
						
						
                        
                    </div>
                    </div>
					
                    </div>
                    </div>
                    </div>
            </div>
        </div>
       
           
        </div>
    </section>
		</Layout>
    )}
  />
)

export default guide
