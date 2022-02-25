import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterSocial = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpSocialLinks{
		edges{
		  node{
			title
			socialMedia{
			  fontAswomeIcons
			  link
			}
		  }
		}
	  }
		}
    `}
    render={data => (
			 <ul className="footer-social-links social-bookmark">
				{data &&
				data.allWpSocialLinks &&
				data.allWpSocialLinks.edges &&
				data.allWpSocialLinks.edges.map(
                prop => {
					return (
					<li><a href={prop.node.socialMedia.link} target="_blank"><i
                                                className={prop.node.socialMedia.fontAswomeIcons}></i></a></li>
					)
                }
                )}
			</ul>
    )}
	/>
)

export default FooterSocial
