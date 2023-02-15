import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from "react-tsparticles";
import Helmet from 'react-helmet'
import quote from  "../img/quote.png"
import author from '../img/blog/author-image.png';
import ReactWOW from 'react-wow'
class Singlecategory extends Component {
  render() {
    const category = this.props.data.allWpCategory
    const posts = this.props.data.allWpGuide
	
    return (
      <Layout>
			
			
		<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						Article
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Guide</li>
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
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/guide/">Guide</Link>
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
                <div className="row">
                        <div className="col-md-11">
						<div className="row justify-content-center">
                            <div className="col-lg-9 col-md-12">
                            <div className=" ">
                                <div className="row">
                                    {
				posts.edges &&
				posts.edges.map(
                prop => {
					return (
					<ReactWOW   animation='fadeInLeft'>
					<div className="col-lg-6 col-md-6   article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <Link to={"/guide/"+prop.node.slug+"/"}>
												
												{(prop.node.BlogExtra.featureImage != null) ? (<img src={prop.node.BlogExtra.featureImage.sourceUrl} className="img-fluid w-100"
                                                alt=""/>) : ('')}		
														</Link>
                                            </div>
                                            <div className="thumbnial-content">
                                                <Link to={"/guide/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title}} className="blog-title">
                                                </Link>
                                                <div className="post-date">{prop.node.date}</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    By <b>Admin</b>  
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><Link to={"/guide/"+prop.node.slug+"/"}><span
                                                            className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></Link>
                                                        </li>
                                                        <li><Link to={"/guide/"+prop.node.slug+"/"}><span className="icon flaticon-share"></span></Link>
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
                                            {category &&
												
												category.edges &&
												category.edges.map(
												(propd,i) => {
													return (
											
											
											<li key={i} ><Link to={"/guide-category/"+propd.node.slug+"/"}>{propd.node.name}</Link></li>
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
    )
  }
}

Singlecategory.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singlecategory

export const pageQuery = graphql`
  query($id: String!) {
    allWpCategory(filter: {parentDatabaseId: {eq: 25}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			  }
	allWpGuide(filter: {categories: { nodes:{ elemMatch: {id: {eq: $id}}}}}) {
    edges {
      node {
        id
        BlogExtra {
          fieldGroupName
          postedBy
          featureImage {
            sourceUrl
          }
        }
        title
        slug
      }
    }
  }
  }
`
