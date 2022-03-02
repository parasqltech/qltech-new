import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from "react-tsparticles";
import Helmet from 'react-helmet'

export const PageTemplate = ({ title, content }) => {
  return (
			<div>
			
				<section className="breadcumbs-and-title-section">
					 
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						{title}
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> {title}</li>
						</ul>
					</div>
			</section>
			<section className="about-us-section-1">
				<div className="container bg-white">
					<div className="main-panel">
						<div className="row">
							<div className="col-lg-12">
								<div className="label-text" dangerouslySetInnerHTML={{ __html: content }} />
									
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
		
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wpPage: page } = data

  return (
    <Layout>
		<Helmet>
		<title>{page.yoastseo.title} - QL Tech</title>
		<meta name="title" content={page.yoastseo.title}></meta>
		<meta name="description" content={page.yoastseo.metadesc}></meta>
		 <meta name="keywords" content={page.yoastseo.metakeywords}></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content={page.yoastseo.opengraphtitle}></meta>
		<meta property="og:description" content={page.yoastseo.opengraphdescription}></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content={page.yoastseo.title}></meta>
		<meta property="twitter:description" content={page.yoastseo.twitterdescription}></meta>
		</Helmet>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
	  yoastseo {
				focuskw
				title
				metarobotsnofollow
				metarobotsnoindex
				metadesc
				metakeywords
				opengraphdescription
				opengraphimage
				opengraphtitle
				twitterdescription
				twittertitle
				twitterimage
			  }
	 
    }
  }
`
