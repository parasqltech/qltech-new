import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

import Helmet from 'react-helmet'
import blog_thumb from '../img/blog/blog-thubnial-1.jpg';
import author from '../img/fevicon.png';
import Particles from "react-tsparticles";
import ReactWOW from 'react-wow'
const article = () => (
  <StaticQuery
    query={graphql`
      query {
			allWpPost(sort: {fields: databaseId, order: DESC}) {
				edges {
				  node {
					id
					title
					slug
					date(formatString: "D MMMM,Y")
					content
					BlogExtra{
					featureImage{
						sourceUrl
					}
					
					
					}
					author { 
node {					
				  name
				  description
				  avatar {
					url
				  }
				}
				}
					categories{
						nodes {
					  id
					  name
					  slug
					}
					}
				  }
				}
			  }
			  allWpCategory(filter: {parentDatabaseId: {eq: 24}}) {
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
			<div className="bg">
					<div className="area-bg">
						 
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						Articles
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Articles</li>
						</ul>
					</div>
			</section>
			<section className="blog-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Feature</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/guide/">Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheet</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here..."/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
		
       <div className="container bg-white article-div">
                <div className="row justify-content-center">
                        <div className="col-md-11">
						<div className="row justify-content-center">
                            <div className="col-lg-9 col-md-12">
                            <div className=" ">
                                <div className="row">
                                    {data &&
				data.allWpPost &&
				data.allWpPost.edges &&
				data.allWpPost.edges.map(
                prop => {
					return (
					<ReactWOW   animation='fadeInLeft'>
					<div className="col-lg-6 col-md-6   article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}>
												
												{(prop.node.BlogExtra.featureImage != null) ? (<img src={prop.node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100"
                                                alt=""/>) : ('')}		
														</Link>
                                            </div>
                                            <div className="thumbnial-content">
                                                <Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title}} className="blog-title">
                                                </Link>
                                                <div className="post-date">{prop.node.date}</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={prop.node.author.node.avatar.url} alt=""/></div>
                                                    By <b>{prop.node.author.node.name}</b>  
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}><span
                                                            className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></Link>
                                                        </li>
                                                        <li><Link to={"/hub/"+prop.node.categories.nodes[0].slug+"/"+prop.node.slug+"/"}><span className="icon flaticon-share"></span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </ReactWOW>
				)
                }
                )}	
									
									
                                   
                                    
                                </div>
                               
                            </div>
                        </div>
						<div className="col-lg-3 col-md-12">
                                <div className="sidebar postion-sticky">
                                    <div className="sidebar-widget p-3 bg-light">
                                        <h6 className="sidebar-title">Category</h6>
                                        <ul className="Categary-list">
                                            {data &&
												data.allWpCategory &&
												data.allWpCategory.edges &&
												data.allWpCategory.edges.map(
												(propd,i) => {
													return (
											
											
											<li key={i} ><Link to={"/category/"+propd.node.slug}>{propd.node.name+"/"}</Link></li>
											)
												}
												)}		
										 
                                        </ul>
                                    
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

export default article
