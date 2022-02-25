import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

import PropTypes from 'prop-types';
import blog_thumb from '../img/blog/blog-thubnial-1.jpg';
import Helmet from 'react-helmet'
import author from '../img/fevicon.png';


class Grid extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	componentDidMount() {
		
	}
	
	 render() {
		 
		const category = this.props.data.allWordpressWpWorksheet; 
		
		
		 
		return(
			<Layout>
			<Helmet>
				<title>Worksheet | Improve Work Efficiency with Worksheet  - QL Tech</title>
				<meta name="title" content="Worksheet | Improve Work Efficiency with Worksheet  - QL Tech"></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						<span className="section-subheading-heading">Worksheets</span>
						<h1 className="section-heading">
						Improve work efficiency
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Worksheets</li>
						</ul>
					</div>
			</section>
			<section className="worksheet-section pt-0">
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
                                    <Link className="nav-link " to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       <div className="container bg-white">
         <div className="row justify-content-center">
            <div className="col-md-11">
                <div className="row ">
                        {category &&
				category &&
				category.edges &&
				category.edges.map(
                (prop,i) => {
					return (
                       <div className="col-lg-4 col-md-6 wow fadeInLeft" >
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                {(prop.node.acf.feature_image) ? (<img src={prop.node.acf.feature_image.source_url} className="img-fluid w-100" alt=""/>) : ('')}
                                
                            </div>
                             <Link to={"/worksheet/"+prop.node.slug} dangerouslySetInnerHTML={{ __html: prop.node.title+' <i class="fa fa-long-arrow-right ml-1"></i>'}} className="worksheet-text">
									
                            </Link>
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
    </section>
		</Layout>
		)
	 }
	
}
Grid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const worksheet = () => (
	<StaticQuery
    query = {graphql`
      query{
        
		 allWordpressWpWorksheet {
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
    }
  `}
  render={(data) => <Grid data={data} />}
  />
)

export default worksheet




