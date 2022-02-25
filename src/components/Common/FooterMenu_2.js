import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterM2 = () => (
  <StaticQuery
    query={graphql`
      query {
       allWordpressMenuLocation(filter: {menu: {slug: {eq: "footer-2"}}}) {
			edges{
				node{
					id
					menuData{
					items{
						title
						url
						slug
					}
					}
				}
			}
		}
		}
    `}
    render={data => (
			<ul className="footer-link-list">
				{data &&
				data.allWordpressMenuLocation &&
				data.allWordpressMenuLocation.edges &&
				data.allWordpressMenuLocation.edges[0] &&
				data.allWordpressMenuLocation.edges[0].node &&
				data.allWordpressMenuLocation.edges[0].node.menuData.items &&
				data.allWordpressMenuLocation.edges[0].node.menuData.items.map(
                prop => {
					return (
						<li><Link to={"/services/"+prop.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.title}}></Link></li>
					)
                }
                )}
			</ul>
    )}
	/>
)

export default FooterM2
