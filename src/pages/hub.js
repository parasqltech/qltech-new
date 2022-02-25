import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

import event_thumb from '../img/events/event-thumbnial.jpg';
import Helmet from 'react-helmet'
import SingleArticle from '../components/hub/SingleArticle';
import SingleGuide from '../components/hub/SingleGuide';
import SingleWorksheet from '../components/hub/SingleWorksheet';





const kh = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpPage(filter: {databaseId: {eq: 324}}) {
			edges {
				node {
					title
					databaseId
					content
				}
			}
		}
      }
    `}
    render={data => (
		<Layout>
			<Helmet>
				<title>Knowledge Hub | Discover the knowledge Insights - QL Tech</title>
				<meta name="title" content="Knowledge Hub | Discover the knowledge Insights - QL Tech"></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						
					</div>
				</div>
				
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						<span className="sub-heading">Knowledge Hub</span>
						<h1 className="section-heading">
						    Discover insights
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Knowledge Hub</li>
						</ul>
					</div>
			</section>
			<section className="resource-section-1">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link active" to="/hub/">Featured</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
        </div>
      
            <div className="container bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-11   ">
                        <div className="row">
                            <SingleArticle />
							</div>
                            <SingleGuide />
							
                            <SingleWorksheet />
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
		</Layout>
    )}
  />
)

export default kh
