const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWpPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        createPage({
          path: `/${page.slug}/`,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })
	.then(() => {
      return graphql(`
         {
      allWpEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpEvent } = result.data
		 const eventTemplate = path.resolve(`./src/templates/single-event.js`)
		  // We want to create a detailed page for each
		  // post node. We'll just use the WordPress Slug for the slug.
		  // The Post ID is prefixed with 'POST_'
		  allWpEvent.edges.forEach(edge => {
			createPage({
			  path: `/event/${edge.node.slug}/`,
			  component: slash(eventTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpWork {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpWork } = result.data
		 const workTemplate = path.resolve(`./src/templates/single-work.js`);
		  allWpWork.edges.forEach(edge => {
			createPage({
			  path: `/work/${edge.node.slug}/`,
			  component: slash(workTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpIndustries {
        edges {
          node {
            id
            slug
			Casestudy {
          fieldGroupName
          caseStudy {
            ... on WpWork {
              databaseId
            }
          }
        }
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpIndustries } = result.data
		 const industriesTemplate = path.resolve(`./src/templates/single-industries.js`);
		  allWpIndustries.edges.forEach(edge => {
			
			if(edge.node.Casestudy.caseStudy != null){
				var vv = edge.node.Casestudy.caseStudy;
				var v = [];
				vv.forEach(vvedge => {
				v.push(vvedge.databaseId); 
				})
			}		
			else{
				var v = [289,1600,1603];
			}
 
			createPage({
			  path: `/industries/${edge.node.slug}/`,
			  component: slash(industriesTemplate),
			  context: {
				id: edge.node.id,
				casestudy: v,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpPlatform {
    edges {
      node {
        id
		slug
        Casestudy {
          fieldGroupName
          caseStudy {
            ... on WpWork {
              databaseId
            }
          }
        }
      }
    }
  }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpPlatform } = result.data
		 const platformsTemplate = path.resolve(`./src/templates/single-platforms.js`);
		  allWpPlatform.edges.forEach(edge => {
			
			if(edge.node.Casestudy.caseStudy != null){
				var vv = edge.node.Casestudy.caseStudy;
				var v = [];
				vv.forEach(vvedge => {
				v.push(vvedge.databaseId); 
				})
			}	
			else{
				var v = [289,1600,1603];
			}	
			
			  
			createPage({
			  path: `/platforms/${edge.node.slug}/`,
			  component: slash(platformsTemplate),
			  context: {
				id: edge.node.id,
				casestudyids: v
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpServices {
        edges {
          node {
            id
            slug
			Casestudy {
          caseStudy {
            ... on WpWork {
              databaseId
            }
          }
        }
			service_slug {
				serviceSlug
			}
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpServices } = result.data
		 const platformsTemplate = path.resolve(`./src/templates/single-service.js`);
		  allWpServices.edges.forEach(edge => {
			  
			if(edge.node.Casestudy.caseStudy != null){
				var vvs = edge.node.Casestudy.caseStudy;
				var a = [];
				vvs.forEach(vvedge => {
				a.push(vvedge.databaseId); 
				})
				
			}	
			else{
				var a = [289,1600,294];
				
			}	  
			
			
			  
			createPage({
			  path: `/services/${edge.node.slug}/`,
			  component: slash(platformsTemplate),
			  context: {
				id: edge.node.id,
				casestudyids_new: a,
				catslug: `/${edge.node.service_slug.serviceSlug}/`,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpProcess {
        edges {
          node {
            id
            slug
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpProcess } = result.data
		 const processTemplate = path.resolve(`./src/templates/single-process.js`);
		  allWpProcess.edges.forEach(edge => {
			  
			createPage({
			  path: `/process/${edge.node.slug}/`,
			  component: slash(processTemplate),
			  context: {
				id: edge.node.id,
				
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpPost{
        edges {
          node {
            id
            slug
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
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpPost } = result.data
		 const blogTemplate = path.resolve(`./src/templates/single-blog.js`);
		  allWpPost.edges.forEach(edge => {
			  
			edge.node.categories.nodes.forEach(newedge =>{
				  createPage({
				  path: `/hub/${newedge.slug}/${edge.node.slug}/`,
				  component: slash(blogTemplate),
				  context: {
					id: edge.node.id,
				  },
				})
				  
			  })
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpWorksheet{
        edges {
          node {
            id
            slug
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpWorksheet } = result.data
		 const worksheetTemplate = path.resolve(`./src/templates/single-worksheet.js`);
		  allWpWorksheet.edges.forEach(edge => {
			  
			createPage({
			  path: `/worksheet/${edge.node.slug}/`,
			  component: slash(worksheetTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpGuide{
        edges {
          node {
            id
            slug
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpGuide } = result.data
		 const guideTemplate = path.resolve(`./src/templates/single-guide.js`);
		  allWpGuide.edges.forEach(edge => {
			  
			createPage({
			  path: `/guide/${edge.node.slug}/`,
			  component: slash(guideTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpCategory(filter: {parentDatabaseId: {eq: 24}}){
            edges {
              node {
                id
                name
                slug
              }
            }
          }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpCategory } = result.data
		 const categoryTemplate = path.resolve(`./src/templates/single-category.js`);
		  allWpCategory.edges.forEach(edge => {
			  
			createPage({
			  path: `/category/${edge.node.slug}/`,
			  component: slash(categoryTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpCategory(filter: {parentDatabaseId: {eq: 25}}){
            edges {
              node {
                id
                name
                slug
              }
            }
          }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWpCategory } = result.data
		 const guidecategoryTemplate = path.resolve(`./src/templates/single-guide-category.js`);
		  allWpCategory.edges.forEach(edge => {
			  
			createPage({
			  path: `/guide-category/${edge.node.slug}/`,
			  component: slash(guidecategoryTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWpPost{
        edges {
          node {
            id
            slug
			title
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const  allWordpressCategory  = result.data.allWpPost.edges
		
		paginate({
			createPage,
			items: allWordpressCategory,
			itemsPerPage: 10,
			pathPrefix: '/article',
			component: path.resolve(`./src/templates/demo-page.js`),
		  });
	 
	 
    })
	
	
	
	
	
	
	
	
}
















exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
	  const fileNode = getNode(node.parent)
   
	  
	  
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope-layout/,
            use: loaders.null(),
          },
		  {
            test: /react-typing-effect/,
            use: loaders.null(),
          }	
		  
		  
        ]
      },
    })
  }
}

